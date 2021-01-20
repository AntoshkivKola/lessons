const nums1 = [1,5,3,6,1,1,1,2,5,6,6,1,5];
const nums2 = [8,7,1,2,3,6,8,4,9,5,8];
const unique = [...new Set([...nums1,...nums2])].sort();