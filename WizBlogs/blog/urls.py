from .views import BlogListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', BlogListViewSet, basename='blogs')

urlpatterns = router.urls