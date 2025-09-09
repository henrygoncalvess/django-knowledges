from django.test import TestCase, Client
from django.urls import reverse 

class TestViews(TestCase):
    
  def setUp(self):
    self.client = Client()
    self.list_url = reverse('list')

  def test_posts_list_GET(self):

    response = self.client.get(self.list_url)

    self.assertEquals(response.status_code, 200)

  def test_posts_list_POST(self):

    response = self.client.post(self.list_url, {
      'username': 'post_test_user',
      'title': 'post_title_test',
      'content': 'post_content_test'
    })

    self.assertEquals(response.status_code, 201)
    self.assertDictContainsSubset({
      'username': 'post_test_user',
      'title': 'post_title_test',
      'content': 'post_content_test'
    }, response.data)

  def test_posts_list_POST_no_data(self):

    response = self.client.post(self.list_url)

    self.assertEquals(response.status_code, 400)

  def test_posts_update_PATCH(self):

    response1 = self.client.post(self.list_url, {
      'username': 'patch_user_test',
      'title': 'patch_title_test',
      'content': 'patch_content_test'
    })

    self.assertEquals(response1.status_code, 201)

    response2 = self.client.patch(reverse('update', args=[response1.data['id']]), {
      'title': 'updated_patch_title_test',
      'content': 'updated_patch_content_test'
    }, 'application/json')

    self.assertEquals(response2.status_code, 200)

    self.assertDictContainsSubset({
      'title': 'updated_patch_title_test',
      'content': 'updated_patch_content_test'
    }, response2.data)

  def test_posts_update_DELETE(self):

    response = self.client.post(self.list_url, {
      'username': 'delete_user_test',
      'title': 'delete_title_test',
      'content': 'delete_content_test'
    })

    self.assertEquals(response.status_code, 201)

    response2 = self.client.delete(reverse('update', args=[response.data['id']]))

    self.assertEquals(response2.status_code, 200)
