const input = `65|79
71|81
71|25
95|29
95|37
95|14
48|75
48|33
48|37
48|87
36|71
36|69
36|84
36|17
36|38
47|25
47|33
47|72
47|37
47|34
47|69
82|68
82|48
82|58
82|55
82|56
82|25
82|89
76|45
76|25
76|68
76|48
76|82
76|67
76|55
76|71
62|74
62|61
62|55
62|41
62|53
62|67
62|82
62|47
62|57
61|56
61|41
61|45
61|72
61|25
61|75
61|33
61|58
61|34
61|15
73|55
73|25
73|68
73|33
73|24
73|15
73|74
73|47
73|75
73|14
73|81
59|18
59|38
59|35
59|67
59|62
59|29
59|71
59|97
59|65
59|69
59|36
59|82
29|79
29|41
29|47
29|84
29|35
29|62
29|82
29|93
29|67
29|68
29|74
29|53
29|97
35|61
35|77
35|14
35|79
35|58
35|45
35|95
35|55
35|56
35|15
35|25
35|81
35|68
35|48
68|45
68|24
68|18
68|47
68|72
68|33
68|95
68|89
68|79
68|56
68|15
68|14
68|34
68|58
68|55
46|82
46|87
46|14
46|36
46|67
46|72
46|84
46|91
46|69
46|59
46|65
46|93
46|75
46|17
46|62
46|29
74|14
74|25
74|47
74|81
74|68
74|58
74|59
74|48
74|75
74|55
74|61
74|89
74|34
74|24
74|46
74|41
74|33
56|96
56|33
56|48
56|69
56|93
56|58
56|62
56|34
56|36
56|37
56|72
56|29
56|57
56|17
56|18
56|78
56|87
56|81
15|59
15|96
15|69
15|45
15|36
15|75
15|18
15|33
15|25
15|89
15|87
15|91
15|34
15|56
15|77
15|17
15|81
15|29
15|48
93|53
93|76
93|74
93|95
93|97
93|61
93|67
93|15
93|41
93|79
93|89
93|57
93|78
93|77
93|84
93|71
93|55
93|82
93|35
93|24
37|36
37|61
37|73
37|78
37|29
37|74
37|38
37|76
37|87
37|84
37|67
37|35
37|57
37|82
37|97
37|91
37|62
37|93
37|41
37|71
37|17
34|53
34|59
34|36
34|78
34|84
34|65
34|57
34|82
34|69
34|67
34|73
34|93
34|91
34|97
34|17
34|38
34|18
34|72
34|37
34|76
34|71
34|87
84|41
84|95
84|82
84|38
84|61
84|68
84|53
84|47
84|77
84|76
84|73
84|89
84|56
84|67
84|74
84|45
84|24
84|15
84|35
84|25
84|71
84|97
84|55
91|35
91|41
91|76
91|67
91|69
91|29
91|53
91|74
91|84
91|93
91|73
91|57
91|87
91|61
91|78
91|62
91|17
91|38
91|82
91|36
91|68
91|71
91|97
91|65
14|37
14|72
14|67
14|91
14|18
14|53
14|93
14|87
14|62
14|75
14|82
14|29
14|69
14|34
14|97
14|17
14|59
14|78
14|36
14|84
14|38
14|57
14|76
14|65
72|29
72|78
72|17
72|87
72|74
72|38
72|97
72|84
72|73
72|69
72|65
72|62
72|91
72|67
72|76
72|36
72|35
72|93
72|82
72|18
72|53
72|37
72|57
72|71
69|67
69|35
69|93
69|62
69|53
69|55
69|82
69|38
69|41
69|29
69|73
69|78
69|57
69|74
69|17
69|68
69|65
69|76
69|24
69|97
69|61
69|79
69|71
69|84
25|37
25|18
25|34
25|45
25|48
25|59
25|91
25|36
25|14
25|46
25|93
25|87
25|69
25|96
25|62
25|56
25|72
25|29
25|33
25|75
25|58
25|17
25|81
25|65
97|74
97|41
97|79
97|15
97|56
97|45
97|96
97|81
97|55
97|71
97|73
97|58
97|68
97|48
97|89
97|46
97|25
97|95
97|35
97|61
97|77
97|47
97|33
97|24
57|25
57|95
57|38
57|76
57|97
57|82
57|74
57|77
57|35
57|89
57|84
57|47
57|53
57|78
57|24
57|79
57|68
57|67
57|15
57|41
57|55
57|73
57|61
57|71
75|67
75|59
75|93
75|76
75|38
75|18
75|87
75|34
75|71
75|53
75|82
75|17
75|97
75|37
75|36
75|57
75|91
75|29
75|69
75|78
75|62
75|84
75|65
75|72
81|87
81|84
81|76
81|34
81|93
81|29
81|91
81|78
81|14
81|57
81|59
81|72
81|62
81|17
81|18
81|65
81|75
81|69
81|37
81|46
81|36
81|33
81|53
81|38
18|57
18|36
18|29
18|67
18|74
18|84
18|82
18|78
18|65
18|62
18|71
18|76
18|53
18|38
18|17
18|87
18|93
18|35
18|97
18|69
18|91
18|61
18|37
18|73
24|37
24|59
24|72
24|25
24|15
24|45
24|18
24|87
24|58
24|91
24|56
24|75
24|79
24|34
24|47
24|14
24|95
24|33
24|46
24|89
24|48
24|81
24|96
24|77
41|96
41|47
41|18
41|95
41|25
41|24
41|81
41|14
41|45
41|89
41|33
41|46
41|72
41|59
41|55
41|77
41|15
41|75
41|79
41|58
41|48
41|56
41|68
41|34
33|69
33|76
33|17
33|65
33|72
33|37
33|38
33|62
33|67
33|75
33|57
33|93
33|91
33|53
33|29
33|18
33|46
33|14
33|84
33|87
33|78
33|36
33|34
33|59
89|14
89|75
89|87
89|45
89|48
89|96
89|59
89|37
89|36
89|46
89|56
89|69
89|18
89|25
89|33
89|65
89|72
89|81
89|58
89|17
89|34
89|62
89|91
89|29
38|61
38|48
38|47
38|58
38|77
38|24
38|71
38|15
38|41
38|56
38|55
38|73
38|68
38|82
38|89
38|25
38|97
38|67
38|74
38|95
38|79
38|35
38|45
38|96
78|55
78|82
78|47
78|79
78|97
78|45
78|71
78|25
78|95
78|67
78|77
78|74
78|53
78|76
78|61
78|41
78|35
78|68
78|89
78|84
78|24
78|73
78|38
78|15
67|73
67|95
67|74
67|81
67|79
67|55
67|45
67|41
67|35
67|97
67|96
67|89
67|58
67|82
67|25
67|71
67|77
67|56
67|24
67|68
67|47
67|15
67|48
67|61
77|59
77|37
77|72
77|33
77|75
77|89
77|81
77|36
77|17
77|25
77|58
77|56
77|87
77|14
77|91
77|48
77|69
77|96
77|34
77|65
77|45
77|18
77|29
77|46
17|97
17|71
17|41
17|47
17|78
17|53
17|93
17|65
17|79
17|76
17|62
17|57
17|35
17|38
17|55
17|73
17|95
17|67
17|68
17|74
17|84
17|82
17|24
17|61
79|15
79|33
79|96
79|36
79|91
79|45
79|89
79|77
79|37
79|46
79|14
79|47
79|25
79|58
79|81
79|34
79|87
79|48
79|18
79|95
79|75
79|72
79|56
79|59
53|76
53|38
53|97
53|95
53|41
53|89
53|82
53|47
53|56
53|67
53|73
53|55
53|71
53|77
53|79
53|61
53|48
53|24
53|15
53|45
53|25
53|74
53|35
53|68
58|59
58|81
58|93
58|53
58|84
58|36
58|75
58|34
58|91
58|37
58|65
58|29
58|46
58|69
58|62
58|87
58|18
58|72
58|76
58|78
58|14
58|57
58|33
58|17
96|75
96|81
96|34
96|53
96|93
96|29
96|84
96|14
96|46
96|17
96|62
96|58
96|37
96|87
96|57
96|36
96|18
96|59
96|33
96|65
96|72
96|78
96|91
96|69
87|97
87|67
87|57
87|74
87|82
87|73
87|38
87|71
87|61
87|36
87|17
87|84
87|29
87|93
87|69
87|76
87|62
87|78
87|35
87|68
87|55
87|41
87|65
87|53
55|15
55|33
55|89
55|59
55|75
55|56
55|77
55|72
55|47
55|95
55|34
55|48
55|25
55|45
55|46
55|79
55|14
55|96
55|37
55|58
55|91
55|18
55|81
55|24
45|34
45|37
45|17
45|75
45|29
45|81
45|14
45|59
45|33
45|91
45|56
45|69
45|58
45|57
45|62
45|46
45|87
45|48
45|18
45|65
45|93
45|72
45|96
45|36
65|95
65|82
65|53
65|62
65|97
65|71
65|61
65|67
65|47
65|15
65|24
65|93
65|76
65|78
65|84
65|57
65|55
65|73
65|38
65|74
65|68
65|35
65|41
71|41
71|68
71|95
71|77
71|46
71|74
71|55
71|45
71|33
71|15
71|96
71|79
71|56
71|61
71|35
71|14
71|48
71|73
71|89
71|24
71|47
71|58
95|15
95|72
95|87
95|59
95|25
95|45
95|18
95|34
95|48
95|33
95|69
95|56
95|91
95|46
95|81
95|58
95|77
95|89
95|75
95|36
95|96
48|58
48|72
48|17
48|65
48|46
48|57
48|81
48|59
48|78
48|18
48|96
48|29
48|91
48|36
48|69
48|14
48|84
48|34
48|62
48|93
36|67
36|41
36|35
36|53
36|73
36|93
36|74
36|57
36|97
36|61
36|78
36|65
36|29
36|76
36|62
36|82
36|68
36|24
36|55
47|87
47|14
47|36
47|56
47|45
47|77
47|91
47|89
47|48
47|96
47|95
47|75
47|58
47|46
47|81
47|15
47|18
47|59
82|81
82|33
82|95
82|97
82|61
82|73
82|71
82|41
82|35
82|15
82|45
82|47
82|96
82|79
82|77
82|24
82|74
76|79
76|95
76|38
76|97
76|61
76|41
76|74
76|89
76|47
76|35
76|24
76|56
76|15
76|73
76|77
76|96
62|35
62|38
62|71
62|97
62|93
62|76
62|73
62|68
62|15
62|77
62|78
62|95
62|79
62|84
62|24
61|95
61|14
61|79
61|89
61|59
61|77
61|24
61|48
61|68
61|96
61|55
61|81
61|47
61|46
73|46
73|77
73|45
73|79
73|96
73|61
73|58
73|41
73|95
73|89
73|35
73|48
73|56
59|91
59|37
59|72
59|78
59|17
59|73
59|87
59|76
59|53
59|84
59|57
59|93
29|61
29|17
29|78
29|24
29|38
29|57
29|71
29|55
29|73
29|76
29|65
35|33
35|34
35|74
35|96
35|46
35|75
35|47
35|89
35|41
35|24
68|46
68|48
68|25
68|59
68|96
68|81
68|77
68|75
68|37
46|76
46|37
46|57
46|78
46|38
46|18
46|34
46|53
74|96
74|79
74|45
74|77
74|15
74|95
74|56
56|14
56|75
56|46
56|65
56|59
56|91
15|72
15|46
15|14
15|58
15|37
93|68
93|47
93|73
93|38
37|69
37|65
37|53
34|62
34|29
84|79

47,89,77,74,61,53,82,38,45,73,15,76,41,24,56,55,67,68,95
82,78,47,97,38,62,41,76,93,73,55,24,65,84,57,71,17,74,68,35,53
15,73,97,81,68,82,96,71,35,48,47
46,75,34,59,72,18,37,17,78,53,76,38,67
89,25,56,33,59,37,65
62,61,84,17,41,69,68,67,76,71,53,65,93
25,91,72,15,59,14,89,45,47,48,37,96,34,36,95,75,87,56,81,46,58,33,77
81,34,33,58,75,96,69
55,79,15,56,48,58,81,33,37
89,79,68,74,38,35,78,97,55,73,76,53,95,67,24,25,41,61,84,82,47,71,77
56,48,96,58,81,33,46,14,75,34,59,72,18,37,91,87,29,65,62,93,57
55,46,48,96,74,41,45,71,77,58,89,79,24,33,61
75,72,18,69,65,62,97
95,15,77,89,25,45,56,48,96,58,81,33,46,14,75,34,59,72,18,37,91,87,36
65,62,57,84,53,76,38,82,73,35,74,61,55,24,79,47,95
57,53,61,67,29,79,82,24,17
53,76,67,97,73,35,74,68,55,24,47,95,15,77,89,25,56
68,55,24,79,47,95,89,25,45,56,48,33,46,14,75,34,59,72,18
68,55,79,95,15,45,58,81,75,34,59
84,61,71,78,35,76,74,89,73,67,24,95,25,82,68,55,79,15,47
62,84,37,69,78,82,61,35,29,74,38,91,67,36,17
56,41,68,74,96,82,58,79,81
59,72,18,37,91,87,36,69,29,17,65,62,78,76,38,67,82,71,73
75,76,57,59,62,33,65,53,78,84,37,38,29,46,18,34,93,69,91,17,72
45,56,48,96,58,81,33,46,14,75,34,59,72,18,37,91,87,69,29,17,65,62,93
67,82,97,71,73,35,74,61,41,68,55,24,79,47,95,15,77,25,45,56,48,96,58
95,15,25,45,48,96,81,33,46,14,75,72,18,37,91,87,69
37,87,36,29,17,65,93,57,78,53,38,67,73,35,61
91,72,14,17,33,57,81,96,84
53,76,38,71,73,35,61,68,55,24,47,95,15,77,89
93,38,67,82,73,74,61,41,55,24,79,47,95,15,77
82,71,41,68,79,48,81
65,57,76,82,97,35,61,79,95
97,71,73,35,61,41,68,55,24,79,47,95,15,77,89,25,45,96,58,81,33
77,89,48,96,81,33,14,59,91,87,36,29,17
15,77,91,89,56,47,24,25,59,45,14
53,38,67,97,73,68,55,24,79,47,95,15,77,45,56
34,59,72,18,37,91,87,36,69,17,65,62,93,57,78,84,53,76,38,67,82,97,71
59,18,37,87,36,69,17,93,57,84,38,82,97,71,73
71,73,35,74,61,41,68,55,79,95,15,77,89,25,45,56,96,58,81,33,46
36,69,29,17,65,62,93,57,78,84,53,76,38,67,82,71,73,35,61,41,55
78,72,91,53,57,87,67,84,69,36,82,71,65,37,34
48,58,81,75,34,37,91,36,62
14,59,72,37,91,36,17,65,57,78,67
82,95,84,61,65,79,24
55,33,48,56,61,75,81,14,74,46,34,24,95,41,68
53,74,69,37,82,29,35,87,38,61,67,84,91,78,93,36,62,17,73,65,97
87,57,76,97,74,61,68
18,58,69,17,53,37,29,81,93
29,59,87,72,46,91,15
96,25,38,71,89,61,41,67,15
57,78,53,38,67,97,71,73,35,61,68,24,79,47,95,15,77
76,38,97,71,35,41,55,24,95,15,25,45,48
89,35,41,67,74,71,45,76,68,48,82
47,97,35,74,76,62,78,53,38,84,82,79,57,68,71,65,73,24,41,17,61
69,62,53,76,97
53,76,38,82,97,71,73,35,74,61,41,68,55,24,79,47,95,15,77,89,25,45,56
59,15,45,89,95,47,96,91,79,72,75,87,56,58,33,81,46,37,14,34,48,25,18
82,97,71,35,68,55,79,15,77,89,25,48,81
38,73,41,15,25,48,96
34,59,72,37,36,69,29,17,65,62,78,53,76,97,71
95,71,84,79,74,35,97,25,73,68,45,61,38,15,67,24,55,53,76
45,96,48,46,72,58,89,37,29,69,59
82,71,74,61,24,47,25,45,48,96,81
29,14,34,65,96,57,18,56,58,72,36,93,33,91,37
95,35,45,77,96,58,33,47,97
67,73,35,61,55,24,47,95,15,89,56,48,58
55,79,45,56,48,96,58,81,46,14,75,59,72
82,38,17,41,67,53,73,76,84,55,57,65,62,69,68,24,97
33,81,34,46,72,45,69,56,29,87,36,62,25,96,37,65,58
24,45,97,96,71,95,38
59,87,72,62,25,75,14,58,34
53,41,36,84,69,97,38,93,29,61,87,78,82,71,91,57,62,73,67,74,17
37,76,33,18,81,46,62,87,91,29,14,53,57,34,59
61,97,79,38,78,93,55,53,67,74,24,62,76,57,68,41,73,71,95,15,35
62,57,53,38,82,97,71,74,61,68,55
14,29,17,33,87,46,89,45,48,36,69,81,72,96,18,65,56,59,37,25,58,75,91
38,67,82,71,73,35,74,41,55,79,47,95,77,89,48
81,33,46,14,75,34,59,72,18,37,87,36,29,62,57,53,76
34,46,41,55,58,24,47
29,72,87,96,91,14,65,56,89
67,41,93,78,53
55,79,47,95,77,25,45,56,81,33,14,75,34,18,37
89,96,58,46,14,75,34,59,72,18,91,87,69
87,14,36,46,18,91,57,93,81,78,37,96,48
25,73,68,89,35,53,76,47,97,55,79,67,15,38,77,61,56
14,75,34,59,37,87,36,69,17,57,38
25,96,56,95,58
68,55,24,79,47,95,15,77,89,25,56,48,96,58,81,33,46,14,75,34,59,72,18
72,17,69,38,82,62,57,91,93,97,35,78,87,84,37,18,29,53,76,65,67,36,71
91,71,37,17,34,76,72
79,37,75,34,25,18,72,58,45,95,33,48,91,46,15,47,81,56,87,59,14,77,96
61,41,68,55,24,47,95,77,89,25,45,56,48,96,58,81,33,46,14,34,59
53,38,67,82,73,61,41,68,24,79,47,95,77,89,56
95,73,61,41,89,78,67,77,35,53,15,55,71,74,79
33,75,59,72,87,69,65,62,93,57,38
34,15,72,95,77,25,56,41,55,59,75,68,14,48,47,96,33,58,24
25,79,41,55,77,61,68,34,75,96,45,89,58,74,24,15,95
25,45,48,96,58,33,14,75,59,72,18,91,87,36,69,17,65
71,35,74,61,41,68,24,47,95,15,89,25,56,48,81,33,46
58,81,33,46,14,75,72,18,37,91,69,29,17,65,93,57,78,84,53
75,34,59,72,18,37,91,87,36,69,29,17,65,93,57,78,84,53,76,38,97
62,73,35,68,55,24,15
41,33,74,61,35,46,14,58,73
69,29,84,41,87,38,71,35,76,67,93,97,91,17,78,57,53,61,65,73,82
37,87,36,69,29,65,57,78,84,76,38,82,97,71,35,74,61
95,79,96,97,47,61,45,67,58,77,73,82,24,56,48,15,41,55,74,25,89,68,71
91,87,36,69,17,65,93,57,78,84,53,76,38,67,82,97,71,73,35,74,41
91,29,62,93,57,53,76,38,67,35,41
73,82,55,89,45,84,76,61,68,53,74,25,15,38,67,95,47,24,35,97,41
96,47,45,15,95,37,81,24,55,59,25,75,48,58,77
29,17,34,37,38,36,93,18,57
78,38,35,55,79,95,25
76,18,97,91,73,17,72,78,84,87,29,71,37,59,69
72,18,37,91,87,36,29,17,65,62,93,57,78,84,53,76,38,67,82,97,71,73,35
41,68,55,24,47,77,25,56,48,96,58,14,75,34,72
24,47,95,25,58,33,59
56,33,14,72,91,87,29
84,59,93,37,57,18,87,65,82,36,38,53,75,72,34,91,67,78,14
53,37,73,61,82,57,97,84,69,67,74,17,35,38,93,29,87
81,33,34,72,18,37,91,69,29,62,93,57,78,84,76
95,47,46,34,74,14,79,15,55,75,58,45,77,96,89
95,25,45,56,58,81,14,34,18,36,69
65,33,29,75,38,76,14
91,75,37,14,95,15,34,56,72,45,18,25,24
68,55,24,15,77,89,25,45,96,58,14,75,18
25,81,33,75,59,72,18,37,91,36,69
78,76,82,41,79,89,25
58,81,33,14,34,59,18,37,87,36,29,17,62,93,78,84,53
53,29,84,24,93,55,69
93,57,78,84,53,76,38,67,82,97,71,73,35,61,41,55,79,47,95,15,77
97,71,73,35,74,61,24,95,15,77,25,56,48,96,58,81,33
25,41,55,89,84,61,82,68,79,74,38,35,76,97,78,53,71,73,24,67,77
24,48,71,74,33,79,41,97,56,73,25
15,95,55,76,89
58,71,55,47,77,74,15,82,67,95,73,35,25
18,59,72,78,29,69,53,82,71,34,91,37,97,87,38,84,17,76,36,93,57
46,33,15,95,36,25,45,18,14,87,96,34,69,37,59,72,48,56,81,89,77
96,77,91,24,79,25,75,33,18,58,95,46,89
29,62,53,78,67,69,41,24,73,76,84,57,68,65,38,93,55,74,17,97,71
38,17,72,97,53,75,82,36,57,69,76,29,65,67,84,59,34,62,87,78,91
68,82,97,61,95,77,56,15,24,89,71,45,74,35,41,25,67,48,73,76,47,79,38
87,74,71,73,69,38,17,67,93,57,35,61,41,76,68,62,29
81,25,55,47,61
35,78,68,73,55,82,15,95,57
69,53,65,84,46,33,75,62,18,36,34,76,91,93,29,57,14,37,78,72,17
97,41,47,95,25,58,33
38,67,82,71,73,35,74,61,41,55,24,79,47,95,15,77,89,25,45,48,96
35,76,48,38,15,61,77
81,75,72,65,62,57,78,84,76
41,45,25,77,48,74,24
87,29,65,57,84,76,38,73,35,61,68
95,15,89,25,45,48,96,58,46,14,75,34,59,72,18,37,91,87,36
75,37,69,48,45,72,81,17,46,33,91,65,87,25,56,59,62
18,37,87,69,17,65,93,78,53,38,67,82,73
35,55,79,77,89,25,45,56,48,96,81,33,75
81,87,78,17,69,18,48,57,33,34,65,62,91,93,36,59,96,14,58
29,17,65,62,93,57,78,84,53,38,82,97,71,73,35,74,61,41,68,24,79
46,75,34,59,72,18,37,91,69,17,65,62,93,57,78,84,53,76,67
77,89,45,14,75,91,17
93,62,65,82,67,69,91,87,84,74,97,76,35,29,73,17,71,37,78,36,53
89,24,46,77,61,56,55
75,59,72,18,37,36,69,29,17,65,62,93,57,78,84,53,76,38,67,82,97
97,67,74,95,89,38,77,24,15,61,55,47,73,71,68,82,79,41,84,76,35,53,78
96,58,81,14,75,34,59,72,18,36,69,17,65,93,84
24,79,47,95,15,25,56,96,58,33,46,14,75,34,59,72,18,37,91
18,95,33,69,87,25,75,48,34,14,72,46,96
77,89,75,18,37,87,17
15,58,81,72,87,69,29
77,56,55,73,46,35,96,14,47,15,48
79,47,95,89,25,45,56,48,96,58,81,33,46,14,75,34,72,18,37,91,87
33,18,81,72,46,25,69,36,17,45,56,62,34,87,91,59,48,75,14
77,25,45,56,96,58,33,14,75,34,59,72,18,37,91,87,36,69,17
95,15,45,77,55,14,48,41,74,61,33
76,38,67,82,71,73,74,61,41,68,55,24,79,47,15,77,89,25,45,56,48
62,17,47,73,65,57,41
57,29,59,81,34
69,78,84,53,82,73,61,41,68
77,55,56,75,24,48,59
34,18,36,69,57,67,71
48,96,58,81,33,46,14,75,59,72,18,37,91,87,36,69,29,17,65,62,93,57,78
71,24,29,67,17,79,76,78,53
73,35,55,15,89,33,14
18,34,33,56,15,72,95
96,37,46,34,14,58,36,65,91,17,81
57,67,14,75,36,37,62
87,78,17,62,36,76,37,53,29,46,34,14,81,33,18
38,97,71,73,35,74,61,41,55,24,79,47,89,25,56
93,17,69,76,97,62,38,53,18,57,74,65,35,78,87,71,37
17,65,62,93,57,78,84,53,76,38,82,97,71,73,35,74,61,41,68,55,24,79,47
15,77,25,45,56,48,81,46,14,75,34,18,91,87,36,69,29
37,29,78,84,38,82,97
93,57,78,84,76,67,82,97,71,73,35,41,68,79,47,15,77
59,72,37,91,87,36,69,29,17,65,62,93,57,78,84,53,76,38,67,82,97,71,73
74,35,67,71,62,61,79
41,82,35,36,91,17,57,76,38,53,65,71,87
25,61,41,68,67,38,24,76,79,55,82,35,73
55,15,75,14,81,45,96,37,72
29,15,18,87,91,56,58,89,48,46,77
18,87,69,84,38,71,74
93,45,29,75,62,18,59
45,75,36,18,95
72,25,69,34,36,56,37,59,33,96,89,95,18,91,87
47,45,89,55,58,79,56,46,75,68,24,14,96,15,81,74,48,77,34,41,95
14,77,48,96,34,87,75,33,91,46,59,95,81,58,56,47,25,45,79,37,72`

const orderingRule = input.split("\n\n")[0].split("\n");
const updates = input.split("\n\n")[1].split("\n");

let count = 0;

const orderRule = {}

for (let i = 0; i < orderingRule.length; i++) {
    const thisRule = orderingRule[i].split("|");

    if (orderRule[thisRule[0]] == undefined) {
        orderRule[thisRule[0]] = thisRule[1];
    } else {
        orderRule[thisRule[0]] = orderRule[thisRule[0]] + "," + thisRule[1];
    } 
}

function getKeyByValue(object, value) {
    const keys = Object.keys(object);
    const values = Object.values(object);
    let inKeys = "";

    for (let i = 0; i < keys.length; i++) {
        if (object[keys[i]].includes(value)) {
            inKeys += keys[i] + ","
        }
    }

    inKeys = inKeys.substring(0, inKeys.length - 1)

    return inKeys
}  

/*
=================
PART 1
=================

for (let i = 0; i < updates.length; i++) {
    const thisUpdate = updates[i].split(",");
    let breakOuter = false;

    for (let j = 0; j < thisUpdate.length - 1; j++) {
        thisNum = thisUpdate[j];

        const applicableRules = getKeyByValue(orderRule, thisNum).split(",");

        for (let k = 0; k < applicableRules.length; k++) {
            if (thisUpdate.slice(j).includes(applicableRules[k])) {
                breakOuter = true;
                break;
            }
        }

        if (breakOuter) {
            break;
        }
    }

    if (breakOuter) {
        continue;
    } else {
        const arrayLength = thisUpdate.length
        count += Number(thisUpdate[Math.floor(arrayLength / 2)]);
    }
}
*/

console.log(count);