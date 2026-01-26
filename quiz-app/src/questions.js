export const questions = [
  {
    question: "What does 'git init' do?",
    options: {
      A: "Initializes a new Git repository in the current directory",
      B: "Clones an existing repository",
      C: "Creates a new branch",
      D: "Commits all changes"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git init' khởi tạo một repository Git mới trong thư mục hiện tại, tạo thư mục .git để lưu trữ metadata và lịch sử của repository."
  },
  {
    question: "What does 'git init -b main' do?",
    options: {
      A: "Initializes a repository and creates a branch named 'main'",
      B: "Initializes a repository with the default branch named 'main'",
      C: "Creates a backup of the main branch",
      D: "Merges into the main branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git init -b main' khởi tạo repository mới và đặt tên nhánh mặc định là 'main' thay vì 'master'. Đây là cách tốt để thiết lập tên nhánh chính ngay từ đầu."
  },
  {
    question: "What is the purpose of 'git clone'?",
    options: {
      A: "To create a new repository",
      B: "To copy an existing repository from a remote source",
      C: "To delete a repository",
      D: "To rename a repository"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git clone' sao chép toàn bộ repository từ nguồn remote (như GitHub) về máy local, bao gồm tất cả lịch sử commit, branches, và files."
  },
  {
    question: "What does 'git add' do?",
    options: {
      A: "Commits changes to the repository",
      B: "Stages changes for the next commit",
      C: "Pushes changes to remote",
      D: "Creates a new branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git add' đưa các thay đổi vào staging area (khu vực tạm), chuẩn bị cho việc commit. Đây là bước trung gian giữa working directory và repository."
  },
  {
    question: "What does 'git add -A' do?",
    options: {
      A: "Adds only new files",
      B: "Adds only modified files",
      C: "Adds all changes including new, modified, and deleted files",
      D: "Adds files one by one"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Lệnh 'git add -A' thêm tất cả các thay đổi trong toàn bộ repository vào staging area, bao gồm file mới, file đã sửa, và file đã xóa. Tương đương với 'git add --all'."
  },
  {
    question: "What is the difference between 'git add .' and 'git add -A'?",
    options: {
      A: "They are exactly the same",
      B: "'git add .' only adds files in current directory and subdirectories, 'git add -A' adds from entire repository",
      C: "'git add .' is faster",
      D: "'git add -A' only adds new files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Trước Git 2.0, 'git add .' chỉ thêm files từ thư mục hiện tại trở xuống, trong khi 'git add -A' thêm từ toàn bộ repository. Từ Git 2.0 trở đi, chúng hoạt động giống nhau."
  },
  {
    question: "What does 'git commit -m \"message\"' do?",
    options: {
      A: "Stages all changes",
      B: "Saves staged changes to the repository with a message",
      C: "Pushes changes to remote",
      D: "Creates a new branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git commit -m \"message\"' lưu các thay đổi đã được stage vào repository với một commit message mô tả. Đây là cách tạo một snapshot của dự án tại thời điểm hiện tại."
  },
  {
    question: "What does 'git commit -am \"message\"' do?",
    options: {
      A: "Commits only new files",
      B: "Stages and commits all tracked modified files",
      C: "Commits all files including untracked ones",
      D: "Amends the previous commit"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git commit -am \"message\"' kết hợp 'git add' và 'git commit' cho các file đã được tracked (đã có trong Git). Nó KHÔNG thêm các file mới chưa được tracked."
  },
  {
    question: "What does 'git commit --amend' do?",
    options: {
      A: "Creates a new commit",
      B: "Modifies the most recent commit",
      C: "Deletes the last commit",
      D: "Merges two commits"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git commit --amend' cho phép sửa đổi commit cuối cùng, có thể thay đổi message hoặc thêm các thay đổi đã quên. Nó thay thế commit cũ bằng commit mới."
  },
  {
    question: "What does 'git commit --amend --no-edit' do?",
    options: {
      A: "Amends the commit but keeps the same commit message",
      B: "Amends the commit and opens editor for new message",
      C: "Creates a new commit without message",
      D: "Deletes the commit message"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git commit --amend --no-edit' sửa đổi commit cuối cùng nhưng giữ nguyên commit message. Hữu ích khi bạn quên thêm file vào commit nhưng không muốn thay đổi message."
  },
  {
    question: "What does 'git status' show?",
    options: {
      A: "The commit history",
      B: "The current state of the working directory and staging area",
      C: "All branches in the repository",
      D: "Remote repository information"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git status' hiển thị trạng thái hiện tại của working directory và staging area, cho biết files nào đã được modified, staged, hoặc untracked."
  },
  {
    question: "What does 'git log' display?",
    options: {
      A: "Current branch status",
      B: "Staged files",
      C: "Commit history",
      D: "Remote branches"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Lệnh 'git log' hiển thị lịch sử các commit trong repository, bao gồm commit hash, tác giả, ngày giờ, và commit message. Đây là công cụ quan trọng để xem lại lịch sử dự án."
  },
  {
    question: "What does 'git log --oneline' do?",
    options: {
      A: "Shows only the first commit",
      B: "Shows each commit on a single line with abbreviated hash",
      C: "Shows only one branch",
      D: "Shows commits from online repository"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log --oneline' hiển thị mỗi commit trên một dòng với hash được rút gọn và commit message, giúp xem nhanh lịch sử commit mà không bị quá nhiều thông tin."
  },
  {
    question: "What does 'git log --graph --oneline --all' display?",
    options: {
      A: "A text-based graph of all branches and their commits",
      B: "Only the current branch",
      C: "A graphical user interface",
      D: "Remote repository information"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git log --graph --oneline --all' hiển thị đồ họa dạng text của tất cả các nhánh và commits, giúp visualize cấu trúc phân nhánh và merge history của dự án."
  },
  {
    question: "What does 'git branch' without arguments do?",
    options: {
      A: "Creates a new branch",
      B: "Lists all local branches",
      C: "Deletes a branch",
      D: "Merges branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git branch' không có tham số sẽ liệt kê tất cả các nhánh local và đánh dấu (*) nhánh hiện tại đang làm việc."
  },
  {
    question: "What does 'git branch feature-name' do?",
    options: {
      A: "Switches to the feature-name branch",
      B: "Creates a new branch named feature-name",
      C: "Deletes the feature-name branch",
      D: "Merges feature-name into current branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git branch feature-name' tạo một nhánh mới có tên 'feature-name' nhưng KHÔNG chuyển sang nhánh đó. Bạn vẫn đang ở nhánh hiện tại."
  },
  {
    question: "What does 'git branch -d branch-name' do?",
    options: {
      A: "Creates a new branch",
      B: "Safely deletes a branch that has been merged",
      C: "Forces deletion of any branch",
      D: "Renames a branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git branch -d branch-name' xóa một nhánh một cách an toàn (safe delete). Nó chỉ xóa nếu nhánh đã được merge, tránh mất dữ liệu."
  },
  {
    question: "What does 'git branch -D branch-name' do?",
    options: {
      A: "Creates a duplicate branch",
      B: "Forces deletion of a branch even if not merged",
      C: "Renames a branch",
      D: "Downloads a branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git branch -D branch-name' xóa cưỡng bức một nhánh bất kể nó đã được merge hay chưa. Cẩn thận vì có thể mất code nếu nhánh chưa merge!"
  },
  {
    question: "What does 'git branch -a' show?",
    options: {
      A: "Only local branches",
      B: "Only remote branches",
      C: "All local and remote branches",
      D: "Only the active branch"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Lệnh 'git branch -a' hiển thị tất cả các nhánh bao gồm cả local và remote branches. Remote branches thường có prefix như 'remotes/origin/'."
  },
  {
    question: "What does 'git branch -r' show?",
    options: {
      A: "Recently created branches",
      B: "Remote branches only",
      C: "Renamed branches",
      D: "Root branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git branch -r' chỉ hiển thị các remote branches (các nhánh trên server remote như GitHub). Hữu ích khi muốn xem các nhánh có sẵn trên remote mà chưa có ở local."
  },
  {
    question: "What does 'git checkout branch-name' do?",
    options: {
      A: "Creates a new branch",
      B: "Switches to an existing branch",
      C: "Deletes a branch",
      D: "Merges branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git checkout branch-name' chuyển sang một nhánh đã tồn tại. Working directory sẽ được cập nhật để phản ánh nội dung của nhánh đó."
  },
  {
    question: "What does 'git checkout -b new-branch' do?",
    options: {
      A: "Deletes new-branch",
      B: "Creates and switches to a new branch named new-branch",
      C: "Only creates new-branch without switching",
      D: "Backs up the current branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git checkout -b new-branch' là shortcut để tạo nhánh mới và chuyển sang nhánh đó ngay lập tức. Tương đương với 'git branch new-branch' + 'git checkout new-branch'."
  },
  {
    question: "What does 'git checkout commit-hash' do?",
    options: {
      A: "Deletes the commit",
      B: "Switches to a specific commit (detached HEAD state)",
      C: "Creates a new branch",
      D: "Merges the commit"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git checkout commit-hash' chuyển HEAD đến một commit cụ thể, đưa bạn vào trạng thái 'detached HEAD'. Trong trạng thái này, bạn không ở trên bất kỳ nhánh nào."
  },
  {
    question: "What is 'git switch' introduced for?",
    options: {
      A: "To replace git checkout for switching branches",
      B: "To switch between repositories",
      C: "To switch users",
      D: "To switch commit messages"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git switch' được giới thiệu trong Git 2.23 để thay thế 'git checkout' cho việc chuyển nhánh, làm cho lệnh rõ ràng và dễ hiểu hơn. 'git checkout' có quá nhiều chức năng khác nhau."
  },
  {
    question: "What does 'git switch -c new-branch' do?",
    options: {
      A: "Copies a branch",
      B: "Creates and switches to a new branch",
      C: "Checks a branch",
      D: "Cancels branch creation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git switch -c new-branch' tạo và chuyển sang nhánh mới. Đây là cách mới thay thế cho 'git checkout -b', với cú pháp rõ ràng hơn."
  },
  {
    question: "What is a fast-forward merge?",
    options: {
      A: "A very quick merge operation",
      B: "A merge where the branch pointer simply moves forward",
      C: "A merge that skips conflicts",
      D: "A merge done on a fast computer"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Fast-forward merge xảy ra khi nhánh hiện tại không có commit mới nào sau điểm phân nhánh. Git chỉ cần di chuyển con trỏ nhánh về phía trước, không tạo merge commit mới."
  },
  {
    question: "What is a three-way merge?",
    options: {
      A: "Merging three branches at once",
      B: "A merge that creates a new commit combining two branch histories",
      C: "A merge with three conflicts",
      D: "A merge done three times"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Three-way merge xảy ra khi cả hai nhánh đều có commits mới sau điểm phân nhánh. Git tạo một merge commit mới kết hợp lịch sử của cả hai nhánh."
  },
  {
    question: "What does 'git merge feature-branch' do?",
    options: {
      A: "Deletes feature-branch",
      B: "Merges feature-branch into the current branch",
      C: "Creates feature-branch",
      D: "Renames feature-branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git merge feature-branch' hợp nhất các thay đổi từ feature-branch vào nhánh hiện tại. Bạn cần đang ở nhánh đích (thường là main/master) trước khi merge."
  },
  {
    question: "What happens during a merge conflict?",
    options: {
      A: "Git automatically chooses the best version",
      B: "Git marks conflicting sections and requires manual resolution",
      C: "The merge is cancelled permanently",
      D: "All changes are lost"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Khi có conflict, Git đánh dấu các phần xung đột trong file với markers (<<<<<<<, =======, >>>>>>>). Bạn phải sửa thủ công, chọn hoặc kết hợp code, rồi commit."
  },
  {
    question: "What is 'git merge --ff-only'?",
    options: {
      A: "Forces a fast-forward merge only, aborts if not possible",
      B: "Always creates a merge commit",
      C: "Merges without checking conflicts",
      D: "Fast-forwards to the oldest commit"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git merge --ff-only' chỉ thực hiện merge nếu có thể fast-forward. Nếu không thể fast-forward, merge sẽ bị abort. Hữu ích để giữ lịch sử tuyến tính."
  },
  {
    question: "What is 'git merge --no-ff'?",
    options: {
      A: "Prevents merging",
      B: "Always creates a merge commit even if fast-forward is possible",
      C: "Merges without fetching",
      D: "Disables conflict detection"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git merge --no-ff' luôn tạo merge commit mới ngay cả khi có thể fast-forward. Điều này giữ lại lịch sử rõ ràng về việc một feature branch đã được merge."
  },
  {
    question: "What does 'git remote' do?",
    options: {
      A: "Removes all remotes",
      B: "Lists all remote repository names",
      C: "Creates a remote repository",
      D: "Connects to remote server"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git remote' không có tham số sẽ liệt kê tên của tất cả các remote repositories đã được cấu hình (thường là 'origin')."
  },
  {
    question: "What does 'git remote -v' show?",
    options: {
      A: "Remote version",
      B: "Remote names with their URLs (verbose)",
      C: "Remote variables",
      D: "Remote validation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git remote -v' (verbose) hiển thị tên remote cùng với URLs đầy đủ cho fetch và push. Giúp bạn biết repository đang kết nối với server nào."
  },
  {
    question: "What does 'git remote add origin URL' do?",
    options: {
      A: "Deletes origin",
      B: "Adds a remote repository named 'origin' with the specified URL",
      C: "Changes origin URL",
      D: "Downloads from origin"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git remote add origin URL' thêm một remote repository mới với tên 'origin' (tên thông dụng nhất) trỏ đến URL chỉ định. Dùng sau khi 'git init' để kết nối với remote."
  },
  {
    question: "What does 'git remote set-url origin new-URL' do?",
    options: {
      A: "Adds a new remote",
      B: "Changes the URL of the existing 'origin' remote",
      C: "Deletes origin",
      D: "Creates a backup URL"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git remote set-url origin new-URL' thay đổi URL của remote 'origin' hiện tại. Hữu ích khi repository được di chuyển sang server khác hoặc chuyển từ HTTPS sang SSH."
  },
  {
    question: "What does 'git remote remove origin' do?",
    options: {
      A: "Removes all files",
      B: "Removes the remote named 'origin' from configuration",
      C: "Removes origin branch",
      D: "Removes remote server"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git remote remove origin' (hoặc 'git remote rm origin') xóa remote 'origin' khỏi cấu hình local. Repository local vẫn còn, chỉ mất kết nối với remote."
  },
  {
    question: "What does 'git remote show origin' display?",
    options: {
      A: "Only the origin URL",
      B: "Detailed information about the 'origin' remote including branches",
      C: "Shows origin on map",
      D: "Shows origin creation date"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git remote show origin' hiển thị thông tin chi tiết về remote 'origin' bao gồm URL, HEAD branch, remote branches, local branches được cấu hình cho pull/push."
  },
  {
    question: "What does 'git fetch' do?",
    options: {
      A: "Downloads and merges changes from remote",
      B: "Downloads changes from remote without merging",
      C: "Uploads changes to remote",
      D: "Deletes remote changes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git fetch' tải về tất cả thay đổi từ remote repository nhưng KHÔNG merge vào nhánh hiện tại. Bạn có thể xem xét thay đổi trước khi quyết định merge."
  },
  {
    question: "What does 'git fetch origin' do?",
    options: {
      A: "Fetches from all remotes",
      B: "Fetches changes from the 'origin' remote only",
      C: "Fetches and merges",
      D: "Fetches origin branch only"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git fetch origin' chỉ tải về thay đổi từ remote 'origin'. Nếu bạn có nhiều remotes, lệnh này chỉ fetch từ origin mà thôi."
  },
  {
    question: "What does 'git fetch origin branch-name' do?",
    options: {
      A: "Fetches all branches",
      B: "Fetches only the specified branch from origin",
      C: "Creates a new branch",
      D: "Deletes the branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git fetch origin branch-name' chỉ tải về một nhánh cụ thể từ remote 'origin'. Giúp tiết kiệm thời gian khi bạn chỉ quan tâm đến một nhánh nhất định."
  },
  {
    question: "What does 'git fetch --all' do?",
    options: {
      A: "Fetches from all configured remotes",
      B: "Fetches all files",
      C: "Fetches all commits",
      D: "Fetches everything including working directory"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git fetch --all' tải về thay đổi từ tất cả các remote repositories đã được cấu hình. Hữu ích khi bạn làm việc với nhiều remotes (origin, upstream, etc.)."
  },
  {
    question: "What does 'git fetch -p' or 'git fetch --prune' do?",
    options: {
      A: "Fetches with high priority",
      B: "Removes local references to remote branches that no longer exist",
      C: "Fetches private branches",
      D: "Fetches and prints details"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git fetch -p' (prune) xóa các remote-tracking branches local khi branch tương ứng đã bị xóa trên remote. Giúp giữ danh sách branches sạch sẽ."
  },
  {
    question: "What does 'git fetch --tags' do?",
    options: {
      A: "Fetches only tags from remote",
      B: "Fetches all refs including tags",
      C: "Tags the fetched commits",
      D: "Creates new tags"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git fetch --tags' tải về tất cả tags từ remote. Mặc định 'git fetch' chỉ fetch tags trên các commits đã fetch, còn --tags fetch tất cả tags."
  },
  {
    question: "What does 'git fetch -v' display?",
    options: {
      A: "Version of fetched files",
      B: "Verbose output showing what is being fetched",
      C: "Validates fetch",
      D: "Virtual fetch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git fetch -v' (verbose) hiển thị thông tin chi tiết về quá trình fetch, cho biết branches và commits nào đang được tải về."
  },
  {
    question: "What does 'git pull' do?",
    options: {
      A: "Only fetches from remote",
      B: "Fetches from remote and merges into current branch",
      C: "Pulls files from staging area",
      D: "Removes changes"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git pull' là shortcut của 'git fetch' + 'git merge'. Nó tải về thay đổi từ remote và tự động merge vào nhánh hiện tại."
  },
  {
    question: "What does 'git pull origin branch-name' do?",
    options: {
      A: "Pulls from all branches",
      B: "Fetches and merges the specified branch from origin into current branch",
      C: "Creates a new branch",
      D: "Deletes origin"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git pull origin branch-name' fetch và merge một nhánh cụ thể từ remote 'origin' vào nhánh hiện tại. Thường dùng để cập nhật code từ remote."
  },
  {
    question: "What does 'git pull --rebase' do?",
    options: {
      A: "Pulls without merging",
      B: "Fetches and rebases current branch on top of remote branch",
      C: "Removes base commits",
      D: "Pulls and creates backup"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git pull --rebase' fetch và rebase thay vì merge. Điều này tạo lịch sử tuyến tính bằng cách đặt các commits local lên trên các commits remote, tránh merge commits."
  },
  {
    question: "What does 'git pull -v' do?",
    options: {
      A: "Validates pull",
      B: "Shows verbose output during pull operation",
      C: "Pulls version tags",
      D: "Pulls virtual branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git pull -v' (verbose) hiển thị thông tin chi tiết về quá trình pull, bao gồm fetch và merge/rebase operations."
  },
  {
    question: "What does 'git push origin branch-name' do?",
    options: {
      A: "Pulls from origin",
      B: "Uploads the specified branch to origin remote",
      C: "Deletes the branch",
      D: "Creates origin"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git push origin branch-name' đẩy nhánh chỉ định lên remote 'origin'. Đây là cách chia sẻ code của bạn với team hoặc backup lên server."
  },
  {
    question: "What does 'git push -u origin branch-name' do?",
    options: {
      A: "Undoes the push",
      B: "Pushes and sets upstream tracking for the branch",
      C: "Pushes to user origin",
      D: "Updates origin"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git push -u origin branch-name' (hoặc --set-upstream) push và thiết lập tracking relationship. Sau đó bạn có thể dùng 'git push' hoặc 'git pull' mà không cần chỉ định remote và branch."
  },
  {
    question: "What does 'git push --tags' do?",
    options: {
      A: "Pushes only tags to remote",
      B: "Tags all commits",
      C: "Pushes commits and all tags",
      D: "Creates tags on remote"
    },
    correctAnswer: "C",
    code: null,
    explanation: "Lệnh 'git push --tags' đẩy tất cả local tags lên remote. Mặc định 'git push' không push tags, bạn phải dùng --tags hoặc push từng tag riêng."
  },
  {
    question: "What does 'git push origin --delete branch-name' do?",
    options: {
      A: "Deletes local branch",
      B: "Deletes the specified branch on remote",
      C: "Deletes all branches",
      D: "Deletes origin"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git push origin --delete branch-name' xóa một nhánh trên remote repository. Local branch vẫn còn, chỉ nhánh trên server bị xóa."
  },
  {
    question: "What does 'git push --force' do?",
    options: {
      A: "Pushes faster",
      B: "Overwrites remote branch with local branch, potentially losing remote commits",
      C: "Forces merge conflicts",
      D: "Pushes with force majeure"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git push --force' ghi đè nhánh remote bằng nhánh local, có thể mất commits trên remote. RẤT NGUY HIỂM! Chỉ dùng khi bạn chắc chắn biết mình đang làm gì."
  },
  {
    question: "What does 'git push --force-with-lease' do?",
    options: {
      A: "Same as --force",
      B: "Force pushes but only if remote hasn't been updated by others",
      C: "Pushes with a lease agreement",
      D: "Leases the remote branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git push --force-with-lease' an toàn hơn --force. Nó chỉ force push nếu remote branch chưa có thay đổi từ lần fetch cuối. Bảo vệ khỏi việc ghi đè work của người khác."
  },
  {
    question: "What does 'git stash' do?",
    options: {
      A: "Deletes all changes",
      B: "Temporarily saves uncommitted changes and reverts working directory to clean state",
      C: "Creates a backup branch",
      D: "Stashes commits"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash' lưu tạm thời các thay đổi chưa commit và làm sạch working directory. Hữu ích khi cần chuyển nhánh nhanh mà chưa muốn commit."
  },
  {
    question: "What does 'git stash push -m \"message\"' do?",
    options: {
      A: "Pushes stash to remote",
      B: "Creates a stash with a descriptive message",
      C: "Pushes and stashes simultaneously",
      D: "Sends message to team"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash push -m \"message\"' tạo stash với một message mô tả. Giúp bạn nhận biết stash chứa gì khi có nhiều stashes. 'git stash save' đã deprecated."
  },
  {
    question: "What does 'git stash -u' or 'git stash --include-untracked' do?",
    options: {
      A: "Stashes for specific user",
      B: "Stashes tracked and untracked files",
      C: "Undoes stash",
      D: "Updates stash"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash -u' stash cả các files untracked (file mới chưa add). Mặc định 'git stash' chỉ stash tracked files. -u giúp stash toàn bộ thay đổi."
  },
  {
    question: "What does 'git stash list' show?",
    options: {
      A: "Lists all branches",
      B: "Shows all stashed changes",
      C: "Lists commits",
      D: "Shows shopping list"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash list' hiển thị danh sách tất cả các stashes đã lưu, với format 'stash@{0}', 'stash@{1}', etc. stash@{0} là stash mới nhất."
  },
  {
    question: "What does 'git stash pop' do?",
    options: {
      A: "Creates a pop-up notification",
      B: "Applies the most recent stash and removes it from stash list",
      C: "Removes all stashes",
      D: "Pops a commit"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash pop' apply stash gần nhất (stash@{0}) vào working directory và xóa stash đó khỏi danh sách. Giống như 'apply + drop'."
  },
  {
    question: "What does 'git stash apply' do?",
    options: {
      A: "Applies the most recent stash but keeps it in stash list",
      B: "Deletes the stash",
      C: "Creates a new stash",
      D: "Applies for a job"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git stash apply' apply stash vào working directory nhưng GIỮ LẠI stash trong list. Hữu ích khi muốn apply cùng một stash vào nhiều nhánh."
  },
  {
    question: "What does 'git stash drop stash@{0}' do?",
    options: {
      A: "Drops all stashes",
      B: "Deletes the specified stash from the list",
      C: "Drops the working directory",
      D: "Downloads a stash"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash drop stash@{0}' xóa một stash cụ thể khỏi danh sách. Hữu ích khi bạn đã apply stash và không cần nó nữa."
  },
  {
    question: "What does 'git stash clear' do?",
    options: {
      A: "Clears working directory",
      B: "Removes all stashes from the stash list",
      C: "Makes stash list more clear",
      D: "Clears staging area"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash clear' xóa TẤT CẢ các stashes. Cẩn thận vì không thể khôi phục sau khi clear! Chỉ dùng khi chắc chắn không cần stashes nữa."
  },
  {
    question: "What does 'git reset --soft HEAD~1' do?",
    options: {
      A: "Deletes the last commit and all changes",
      B: "Undoes the last commit but keeps changes staged",
      C: "Resets to first commit",
      D: "Softly removes files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git reset --soft HEAD~1' hủy commit cuối cùng nhưng giữ các thay đổi trong staging area. Bạn có thể commit lại ngay với message mới."
  },
  {
    question: "What does 'git reset --mixed HEAD~1' (or just 'git reset HEAD~1') do?",
    options: {
      A: "Undoes the last commit and unstages changes but keeps them in working directory",
      B: "Deletes all changes",
      C: "Mixes two commits",
      D: "Resets mixing settings"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git reset --mixed HEAD~1' (mặc định) hủy commit cuối và unstage changes, nhưng giữ thay đổi trong working directory. Bạn cần add và commit lại."
  },
  {
    question: "What does 'git reset --hard HEAD~1' do?",
    options: {
      A: "Makes the last commit harder to remove",
      B: "Undoes the last commit and completely deletes all changes",
      C: "Resets hardware",
      D: "Creates a hard backup"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git reset --hard HEAD~1' hủy commit cuối và XÓA HẾT thay đổi trong staging và working directory. NGUY HIỂM! Không thể phục hồi nếu chưa commit."
  },
  {
    question: "What is the main difference between the three reset options?",
    options: {
      A: "Speed of execution",
      B: "How they handle the working directory and staging area after resetting",
      C: "Which files they affect",
      D: "The number of commits they reset"
    },
    correctAnswer: "B",
    code: null,
    explanation: "--soft giữ staging area, --mixed (default) unstage nhưng giữ working directory, --hard xóa tất cả. Chọn option phù hợp tùy bạn muốn giữ lại changes hay không."
  },
  {
    question: "What does 'git rebase main' do when on feature branch?",
    options: {
      A: "Merges main into feature",
      B: "Moves feature branch commits on top of main branch",
      C: "Deletes main branch",
      D: "Creates a new base"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git rebase main' (khi đang ở feature branch) di chuyển các commits của feature lên trên commits mới nhất của main. Tạo lịch sử tuyến tính, sạch đẹp hơn merge."
  },
  {
    question: "What does 'git rebase --continue' do?",
    options: {
      A: "Skips the rebase",
      B: "Continues the rebase after resolving conflicts",
      C: "Continues to next branch",
      D: "Continues downloading"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git rebase --continue' tiếp tục quá trình rebase sau khi bạn đã giải quyết conflicts. Bạn cần add các files đã sửa conflict trước khi chạy lệnh này."
  },
  {
    question: "What does 'git rebase --abort' do?",
    options: {
      A: "Aborts Git",
      B: "Cancels the rebase and returns to the state before rebase started",
      C: "Aborts the commit",
      D: "Removes all branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git rebase --abort' hủy bỏ quá trình rebase và quay về trạng thái trước khi bắt đầu rebase. Hữu ích khi gặp quá nhiều conflicts hoặc muốn thử cách khác."
  },
  {
    question: "What does 'git rebase -i HEAD~3' do?",
    options: {
      A: "Interactive rebase of the last 3 commits",
      B: "Rebases 3 branches",
      C: "Internet rebase",
      D: "Intelligent rebase"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git rebase -i HEAD~3' (interactive) mở editor cho phép bạn chỉnh sửa, reorder, squash, hoặc xóa 3 commits gần nhất. Công cụ mạnh để dọn dẹp lịch sử commit."
  },
  {
    question: "In interactive rebase, what does 'pick' do?",
    options: {
      A: "Deletes the commit",
      B: "Uses the commit as is",
      C: "Picks random commits",
      D: "Chooses files to commit"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Trong interactive rebase, 'pick' giữ nguyên commit. Đây là option mặc định. Các option khác như 'reword', 'edit', 'squash', 'drop' cho phép chỉnh sửa commit."
  },
  {
    question: "In interactive rebase, what does 'squash' do?",
    options: {
      A: "Deletes the commit",
      B: "Combines the commit with the previous commit",
      C: "Compresses files",
      D: "Squashes bugs"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Trong interactive rebase, 'squash' (hoặc 's') gộp commit với commit trước đó, cho phép viết lại message. Hữu ích để gộp nhiều commits nhỏ thành một commit lớn."
  },
  {
    question: "In interactive rebase, what does 'reword' do?",
    options: {
      A: "Rewrites the code",
      B: "Allows you to change the commit message",
      C: "Reorders commits",
      D: "Translates message to another language"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Trong interactive rebase, 'reword' (hoặc 'r') cho phép thay đổi commit message mà không thay đổi nội dung commit. Khác với 'pick' giữ nguyên message."
  },
  {
    question: "What does 'git rebase main feature' do?",
    options: {
      A: "Rebases main onto feature",
      B: "Rebases feature branch onto main branch",
      C: "Merges main and feature",
      D: "Creates a new branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git rebase main feature' rebase nhánh 'feature' lên 'main' mà không cần checkout feature trước. Cú pháp: 'git rebase <base> <branch>'."
  },
  {
    question: "What does 'git cherry-pick a123abc' do?",
    options: {
      A: "Deletes commit a123abc",
      B: "Applies the changes from commit a123abc to current branch",
      C: "Picks cherries from the tree",
      D: "Creates a new commit a123abc"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git cherry-pick a123abc' apply một commit cụ thể từ nhánh khác vào nhánh hiện tại. Tạo commit mới với cùng thay đổi nhưng hash khác."
  },
  {
    question: "What does 'git cherry-pick a123 b456 c789' do?",
    options: {
      A: "Picks only the first commit",
      B: "Cherry-picks multiple commits in order",
      C: "Merges three commits",
      D: "Creates three branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git cherry-pick a123 b456 c789' apply nhiều commits theo thứ tự vào nhánh hiện tại. Mỗi commit được apply riêng lẻ, tạo commits mới tương ứng."
  },
  {
    question: "What does 'git cherry-pick c1..c5' do?",
    options: {
      A: "Cherry-picks commits from c1 to c5 (excluding c1)",
      B: "Cherry-picks only c1 and c5",
      C: "Creates 5 commits",
      D: "Picks 5 random commits"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git cherry-pick c1..c5' apply một range commits từ c1 đến c5, KHÔNG bao gồm c1. Để bao gồm c1, dùng 'c1^..c5' hoặc 'git cherry-pick c1^..c5'."
  },
  {
    question: "What does 'git cherry-pick --continue' do?",
    options: {
      A: "Skips the current commit",
      B: "Continues cherry-pick after resolving conflicts",
      C: "Continues to next branch",
      D: "Cancels cherry-pick"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git cherry-pick --continue' tiếp tục quá trình cherry-pick sau khi giải quyết conflicts. Cần add các files đã sửa conflicts trước khi chạy lệnh này."
  },
  {
    question: "What does 'git cherry-pick --abort' do?",
    options: {
      A: "Aborts Git",
      B: "Cancels the cherry-pick and returns to state before cherry-pick",
      C: "Aborts all commits",
      D: "Deletes the branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git cherry-pick --abort' hủy bỏ cherry-pick và quay về trạng thái trước khi bắt đầu. Dùng khi gặp conflicts phức tạp hoặc cherry-pick nhầm commit."
  },
  {
    question: "Can you cherry-pick from a stash?",
    options: {
      A: "No, impossible",
      B: "Yes, using 'git cherry-pick stash@{0}'",
      C: "Only on Fridays",
      D: "Only with special permission"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có thể cherry-pick từ stash bằng 'git cherry-pick stash@{0}'. Stash về bản chất là một commit đặc biệt, nên có thể cherry-pick như commit bình thường."
  },
  {
    question: "What is .gitignore file used for?",
    options: {
      A: "To ignore Git commands",
      B: "To specify files and patterns that Git should not track",
      C: "To ignore other users",
      D: "To delete files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "File .gitignore chỉ định các files/folders mà Git sẽ không track. Thường dùng cho node_modules, .env, build files, IDE settings, etc."
  },
  {
    question: "Which pattern in .gitignore ignores all .log files?",
    options: {
      A: "log",
      B: "*.log",
      C: ".log",
      D: "all.log"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Pattern '*.log' trong .gitignore sẽ ignore tất cả files có đuôi .log trong toàn bộ repository. Dấu * là wildcard matching bất kỳ ký tự nào."
  },
  {
    question: "Which pattern in .gitignore ignores a specific folder named 'temp'?",
    options: {
      A: "temp",
      B: "temp/",
      C: "/temp",
      D: "All of the above work but have different meanings"
    },
    correctAnswer: "D",
    code: null,
    explanation: "'temp/' ignore folder temp ở mọi nơi, '/temp/' chỉ ignore folder temp ở root, 'temp' ignore cả file và folder tên temp. Dấu / cuối chỉ định rõ là folder."
  },
  {
    question: "What does '**' mean in .gitignore patterns?",
    options: {
      A: "Match anything",
      B: "Match any number of directories",
      C: "Make pattern bold",
      D: "Double wildcard"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Pattern '**' trong .gitignore match bất kỳ số lượng directories nào. Ví dụ: '**/logs/*.log' match logs/debug.log và cả build/logs/error.log."
  },
  {
    question: "How do you ignore all files in a directory except one file?",
    options: {
      A: "Impossible",
      B: "Use * to ignore all, then use ! to negate for specific file",
      C: "Delete other files",
      D: "Use special Git command"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Dùng pattern: 'folder/*' để ignore tất cả, sau đó '!folder/keep.txt' để negate (giữ lại) file cụ thể. Dấu ! dùng để negate pattern."
  },
  {
    question: "What does '#' at the start of a line in .gitignore mean?",
    options: {
      A: "A comment line",
      B: "Ignore files starting with #",
      C: "Special pattern",
      D: "Hash files"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Dấu '#' ở đầu dòng trong .gitignore đánh dấu dòng đó là comment. Git sẽ ignore dòng đó. Để ignore file tên '#filename', dùng '\\#filename'."
  },
  {
    question: "If a file is already tracked by Git, will adding it to .gitignore stop tracking it?",
    options: {
      A: "Yes, immediately",
      B: "No, you need to manually untrack it first using 'git rm --cached'",
      C: "Yes, after restart",
      D: "Only if you force it"
    },
    correctAnswer: "B",
    code: null,
    explanation: ".gitignore chỉ áp dụng cho untracked files. Để stop tracking file đã tracked, phải dùng 'git rm --cached filename', sau đó add vào .gitignore."
  },
  {
    question: "What does 'git rm --cached filename' do?",
    options: {
      A: "Deletes the file completely",
      B: "Removes file from Git tracking but keeps it in working directory",
      C: "Caches the removal",
      D: "Removes cache files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git rm --cached filename' untrack file khỏi Git nhưng giữ file trong working directory. Dùng khi muốn stop tracking file nhưng không xóa file local."
  },
  {
    question: "What is the difference between 'git merge' and 'git rebase'?",
    options: {
      A: "No difference",
      B: "Merge creates a merge commit; rebase rewrites history linearly",
      C: "Merge is faster",
      D: "Rebase is only for advanced users"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Merge tạo merge commit, giữ lại toàn bộ lịch sử phân nhánh. Rebase viết lại lịch sử tuyến tính bằng cách di chuyển commits. Merge an toàn hơn cho shared branches."
  },
  {
    question: "When should you NOT use 'git rebase'?",
    options: {
      A: "On local branches",
      B: "On public/shared branches that others are using",
      C: "On feature branches",
      D: "Never, it's always safe"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG nên rebase các public/shared branches vì rebase thay đổi commit history. Điều này gây confusion và conflicts cho người khác đang làm việc trên cùng branch."
  },
  {
    question: "What happens after a successful merge on GitHub?",
    options: {
      A: "Nothing",
      B: "The feature branch can be deleted if no longer needed",
      C: "All branches are deleted",
      D: "Repository is archived"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Sau khi merge pull request trên GitHub, feature branch thường được delete để giữ repository sạch sẽ. Code đã được merge vào main branch nên branch cũ không còn cần thiết."
  },
  {
    question: "What is a pull request (PR) on GitHub?",
    options: {
      A: "A request to pull code from main",
      B: "A request to merge changes from one branch into another, with code review",
      C: "A request to pull the repository",
      D: "A request for help"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Pull Request (PR) trên GitHub là yêu cầu merge code từ branch này sang branch khác, kèm theo code review, discussions, và checks. Đây là workflow chuẩn cho team collaboration."
  },
  {
    question: "What does 'git clone --depth 1' do?",
    options: {
      A: "Clones only 1 file",
      B: "Creates a shallow clone with only the latest commit history",
      C: "Clones with depth of 1 meter",
      D: "Clones 1 branch only"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git clone --depth 1' tạo shallow clone chỉ với commit history gần nhất. Tiết kiệm bandwidth và disk space, hữu ích khi chỉ cần code mới nhất, không cần toàn bộ history."
  },
  {
    question: "What is 'git reflog'?",
    options: {
      A: "A log of references",
      B: "A log of all HEAD movements and changes, useful for recovering lost commits",
      C: "A log of remote operations",
      D: "A reference manual"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git reflog' hiển thị lịch sử mọi thay đổi của HEAD. Cực kỳ hữu ích để recover commits 'mất' sau reset --hard hoặc xóa branch nhầm. Như 'time machine' của Git."
  },
  {
    question: "What does 'git diff' show?",
    options: {
      A: "All commits",
      B: "Differences between working directory and staging area",
      C: "Branch names",
      D: "Remote URLs"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git diff' hiển thị differences giữa working directory và staging area (các thay đổi chưa được staged). Giúp review changes trước khi add."
  },
  {
    question: "What does 'git diff --staged' show?",
    options: {
      A: "Differences between staging area and last commit",
      B: "Differences between branches",
      C: "All changes",
      D: "Stage names"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git diff --staged' (hoặc --cached) hiển thị differences giữa staging area và commit cuối cùng. Cho biết những gì sẽ được commit."
  },
  {
    question: "What does 'git diff branch1 branch2' show?",
    options: {
      A: "Nothing",
      B: "Differences between two branches",
      C: "Merges two branches",
      D: "Deletes differences"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git diff branch1 branch2' hiển thị differences giữa hai nhánh. Hữu ích để xem những thay đổi giữa feature branch và main trước khi merge."
  },
  {
    question: "What is 'HEAD' in Git?",
    options: {
      A: "The top of the repository",
      B: "A pointer to the current branch reference or commit",
      C: "The first commit",
      D: "The main branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "HEAD là con trỏ đến current branch reference hoặc commit hiện tại. Thường HEAD trỏ đến branch tip. Khi checkout commit trực tiếp, HEAD rời khỏi branch (detached HEAD)."
  },
  {
    question: "What does 'HEAD~1' mean?",
    options: {
      A: "The current commit",
      B: "The parent commit (one commit before HEAD)",
      C: "The first commit",
      D: "One branch before"
    },
    correctAnswer: "B",
    code: null,
    explanation: "HEAD~1 (hoặc HEAD~) là parent commit của HEAD, tức commit trước đó. HEAD~2 là 2 commits trước, HEAD~3 là 3 commits trước, v.v..."
  },
  {
    question: "What is the difference between 'HEAD~1' and 'HEAD^1'?",
    options: {
      A: "They are the same for linear history",
      B: "HEAD~1 goes back commits, HEAD^1 chooses parent in merge commits",
      C: "HEAD^ is faster",
      D: "No difference ever"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Với linear history, HEAD~1 và HEAD^1 giống nhau. Với merge commits (có nhiều parents), HEAD^1 là parent thứ nhất, HEAD^2 là parent thứ hai. HEAD~1 luôn đi ngược lịch sử."
  },
  {
    question: "What does 'git tag v1.0.0' do?",
    options: {
      A: "Deletes tags",
      B: "Creates a lightweight tag named v1.0.0 at current commit",
      C: "Tags all files",
      D: "Versions the repository"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git tag v1.0.0' tạo lightweight tag (như bookmark) tại commit hiện tại. Tags thường dùng để đánh dấu release versions (v1.0.0, v2.0.0, etc.)."
  },
  {
    question: "What does 'git tag -a v1.0.0 -m \"Release version 1.0.0\"' do?",
    options: {
      A: "Creates a lightweight tag",
      B: "Creates an annotated tag with metadata",
      C: "Adds version to files",
      D: "Archives the release"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git tag -a' tạo annotated tag với metadata (tagger name, email, date, message). Annotated tags recommended cho releases vì chứa đầy đủ thông tin hơn lightweight tags."
  },
  {
    question: "How do you delete a local tag?",
    options: {
      A: "git tag -d tag-name",
      B: "git delete tag-name",
      C: "git remove tag-name",
      D: "git tag --delete tag-name"
    },
    correctAnswer: "A",
    code: null,
    explanation: "Lệnh 'git tag -d tag-name' xóa tag local. Để xóa tag trên remote, dùng 'git push origin --delete tag-name' hoặc 'git push origin :refs/tags/tag-name'."
  },
  {
    question: "What does 'git push origin v1.0.0' do?",
    options: {
      A: "Pushes branch v1.0.0",
      B: "Pushes the tag v1.0.0 to remote",
      C: "Versions the push",
      D: "Creates remote tag"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git push origin v1.0.0' đẩy một tag cụ thể lên remote. Mặc định 'git push' KHÔNG push tags, phải push riêng hoặc dùng --tags."
  },
  {
    question: "What does 'git show commit-hash' do?",
    options: {
      A: "Shows all commits",
      B: "Shows detailed information and diff of a specific commit",
      C: "Shows the repository",
      D: "Displays the hash"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git show commit-hash' hiển thị thông tin chi tiết về một commit (author, date, message) và diff của commit đó. Có thể dùng cho tags, branches, hoặc commit hash."
  },
  {
    question: "What is a 'detached HEAD' state?",
    options: {
      A: "A broken Git repository",
      B: "When HEAD points directly to a commit instead of a branch",
      C: "When Git is not working",
      D: "A deleted branch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Detached HEAD xảy ra khi checkout một commit cụ thể thay vì branch. Trong trạng thái này, commits mới sẽ không thuộc branch nào và có thể bị mất nếu không tạo branch mới."
  },
  {
    question: "What should you do if you make commits in detached HEAD state?",
    options: {
      A: "Panic",
      B: "Create a new branch to save the commits",
      C: "Restart computer",
      D: "Nothing, they're automatically saved"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Nếu commit trong detached HEAD state, cần tạo branch mới với 'git branch branch-name' hoặc 'git checkout -b branch-name' để lưu commits. Nếu không, commits có thể bị mất khi checkout nơi khác."
  },
  {
    question: "What does 'git clean -f' do?",
    options: {
      A: "Cleans the repository",
      B: "Removes untracked files from working directory",
      C: "Formats the code",
      D: "Cleans up commits"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git clean -f' (force) xóa các untracked files khỏi working directory. Cẩn thận vì không thể phục hồi! Nên dùng 'git clean -n' (dry-run) để xem files sẽ bị xóa trước."
  },
  {
    question: "What does 'git clean -fd' do?",
    options: {
      A: "Cleans files only",
      B: "Removes untracked files and directories",
      C: "Formats directories",
      D: "Finds duplicates"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git clean -fd' xóa cả untracked files và directories. Flag -d bao gồm directories. Rất mạnh và nguy hiểm, nên test với -n trước!"
  },
  {
    question: "What does 'git blame filename' do?",
    options: {
      A: "Blames you for errors",
      B: "Shows who last modified each line of a file",
      C: "Finds bugs in file",
      D: "Deletes the file"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git blame filename' hiển thị author, commit hash, và timestamp cho mỗi dòng trong file. Hữu ích để tìm ai viết/sửa đổi một đoạn code cụ thể."
  },
  {
    question: "What does 'git bisect' help you do?",
    options: {
      A: "Split the repository",
      B: "Use binary search to find which commit introduced a bug",
      C: "Divide branches",
      D: "Create two copies"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git bisect' dùng binary search để tìm commit gây ra bug. Bạn đánh dấu good/bad commits, Git tự động checkout commits ở giữa để test, nhanh chóng tìm ra commit lỗi."
  },
  {
    question: "What does 'git archive' do?",
    options: {
      A: "Archives old commits",
      B: "Creates a zip or tar archive of the repository files",
      C: "Backs up to archive.org",
      D: "Deletes old files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git archive' tạo archive file (zip, tar, etc.) của repository không bao gồm .git folder. Hữu ích để export source code cho release hoặc deployment."
  },
  {
    question: "What is 'origin/main' or 'origin/master'?",
    options: {
      A: "The main branch on remote",
      B: "A remote-tracking branch that mirrors the main branch on origin",
      C: "The original main branch",
      D: "The master origin"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'origin/main' là remote-tracking branch, một bản copy local của main branch trên remote origin. Nó được update khi bạn fetch/pull, cho biết trạng thái của remote branch."
  },
  {
    question: "What does 'git push -f' stand for and why is it dangerous?",
    options: {
      A: "Fast push, not dangerous",
      B: "Force push, overwrites remote history and can lose others' work",
      C: "Fix push, fixes errors",
      D: "Final push, completes the operation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git push -f' (force) ghi đè lịch sử remote bằng local. CỰC KỲ NGUY HIỂM trên shared branches vì có thể xóa mất công việc của người khác. Chỉ dùng trên personal branches hoặc khi thực sự cần thiết."
  },
  {
    question: "What is a 'git hook'?",
    options: {
      A: "A fishing tool",
      B: "Scripts that run automatically at certain Git events (commit, push, etc.)",
      C: "A way to hook repositories together",
      D: "A branch connector"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Git hooks là scripts tự động chạy tại các events nhất định (pre-commit, post-commit, pre-push, etc.). Dùng để enforce coding standards, run tests, hoặc tự động hóa workflows."
  },
  {
    question: "Where are Git hooks stored?",
    options: {
      A: "In the cloud",
      B: "In the .git/hooks directory",
      C: "In the main directory",
      D: "On GitHub servers"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Git hooks được lưu trong thư mục .git/hooks/ dưới dạng executable scripts. Git cung cấp sample hooks, bạn có thể rename (bỏ .sample) và customize chúng."
  },
  {
    question: "What does 'git config --global user.name \"Your Name\"' do?",
    options: {
      A: "Changes Git username",
      B: "Sets the name that will be attached to your commits globally",
      C: "Creates a new user",
      D: "Configures the repository name"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh này set tên author sẽ được ghi trong mọi commits bạn tạo (global config). Để set cho riêng một repository, bỏ --global và chạy trong repository đó."
  },
  {
    question: "What does 'git config --global user.email \"email@example.com\"' do?",
    options: {
      A: "Sends email",
      B: "Sets the email that will be attached to your commits globally",
      C: "Creates email account",
      D: "Configures email notifications"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh này set email author cho commits. Rất quan trọng để đúng email, đặc biệt khi làm việc với GitHub - email cần khớp với GitHub account để contributions được tính."
  },
  {
    question: "What does 'git config --list' do?",
    options: {
      A: "Lists all files",
      B: "Shows all Git configuration settings",
      C: "Lists all branches",
      D: "Creates a configuration list"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git config --list' hiển thị tất cả Git configs (global và local), bao gồm user.name, user.email, aliases, và nhiều settings khác. Hữu ích để kiểm tra cấu hình."
  },
  {
    question: "What does 'git log --author=\"John\"' do?",
    options: {
      A: "Changes author to John",
      B: "Shows only commits by author containing 'John'",
      C: "Logs in as John",
      D: "Creates author John"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log --author=\"John\"' filter log chỉ hiển thị commits của authors có tên chứa 'John'. Hữu ích để xem contributions của một người cụ thể."
  },
  {
    question: "What does 'git log --since=\"2 weeks ago\"' show?",
    options: {
      A: "Commits from 2 weeks in the future",
      B: "Commits made in the last 2 weeks",
      C: "The second week's commits",
      D: "Weekly reports"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log --since=\"2 weeks ago\"' hiển thị commits từ 2 tuần trước đến nay. Có thể dùng --since, --after, --until, --before với nhiều format dates."
  },
  {
    question: "What does 'git log --grep=\"bugfix\"' do?",
    options: {
      A: "Fixes bugs",
      B: "Searches for commits with 'bugfix' in the commit message",
      C: "Greps files for 'bugfix'",
      D: "Creates bugfix log"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log --grep=\"bugfix\"' tìm commits có 'bugfix' trong commit message. Hữu ích để tìm các commits liên quan đến một topic hoặc ticket number."
  },
  {
    question: "What does 'git log -p' show?",
    options: {
      A: "Pretty log",
      B: "Commit history with patch (diff) for each commit",
      C: "Public commits",
      D: "Private log"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log -p' (patch) hiển thị commit history kèm theo diff chi tiết của mỗi commit. Cho phép xem chính xác những gì đã thay đổi trong mỗi commit."
  },
  {
    question: "What does 'git log --stat' show?",
    options: {
      A: "Statistical analysis",
      B: "Commit history with statistics of changed files",
      C: "Status of repository",
      D: "Static files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log --stat' hiển thị commit history với thống kê files đã thay đổi và số lượng insertions/deletions. Tóm tắt thay đổi mà không show full diff."
  },
  {
    question: "What is 'git revert'?",
    options: {
      A: "Same as git reset",
      B: "Creates a new commit that undoes changes from a previous commit",
      C: "Reverts all changes",
      D: "Goes back in time"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git revert commit-hash' tạo một commit MỚI để undo changes của commit cũ. Khác với reset, revert KHÔNG xóa history, nên an toàn cho shared branches."
  },
  {
    question: "What is the difference between 'git reset' and 'git revert'?",
    options: {
      A: "They are the same",
      B: "Reset removes commits from history; revert creates new commit to undo",
      C: "Revert is faster",
      D: "Reset is safer"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Reset xóa commits khỏi history (rewrites history), nguy hiểm cho shared branches. Revert tạo commit mới để undo, giữ nguyên history, an toàn cho collaboration."
  },
  {
    question: "What does 'git mv oldname newname' do?",
    options: {
      A: "Moves files between directories",
      B: "Renames a file and stages the change",
      C: "Creates a new file",
      D: "Moves commits"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git mv oldname newname' rename file và tự động stage change đó. Tương đương với mv + git rm + git add, nhưng tiện hơn và Git nhận biết đây là rename operation."
  },
  {
    question: "What does 'git restore filename' do (Git 2.23+)?",
    options: {
      A: "Restores deleted repository",
      B: "Discards changes in working directory for the file",
      C: "Restores from backup",
      D: "Repairs corrupted file"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git restore filename' (Git 2.23+) discard changes trong working directory, quay về trạng thái của last commit. Thay thế cho 'git checkout -- filename'."
  },
  {
    question: "What does 'git restore --staged filename' do?",
    options: {
      A: "Restores staged files",
      B: "Unstages the file but keeps changes in working directory",
      C: "Deletes staged changes",
      D: "Stages the file"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git restore --staged filename' unstage file (bỏ khỏi staging area) nhưng giữ changes trong working directory. Thay thế cho 'git reset HEAD filename'."
  },
  {
    question: "What does 'git shortlog' do?",
    options: {
      A: "Shows short logs",
      B: "Summarizes git log output by author",
      C: "Shortens commit messages",
      D: "Creates shortcuts"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git shortlog' tóm tắt 'git log' output theo author, hiển thị số lượng commits và messages của mỗi contributor. Hữu ích cho release notes hoặc contribution summary."
  },
  {
    question: "What does 'git describe' do?",
    options: {
      A: "Describes the repository",
      B: "Shows the most recent tag reachable from a commit",
      C: "Writes descriptions",
      D: "Describes files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git describe' tìm tag gần nhất từ commit hiện tại và tạo human-readable name. Ví dụ: 'v1.0.0-14-g2414721' (14 commits sau tag v1.0.0, commit hash g2414721)."
  },
  {
    question: "What does .gitattributes file do?",
    options: {
      A: "Sets file attributes",
      B: "Defines attributes for paths (line endings, diff, merge strategies)",
      C: "Attributes files",
      D: "Creates file metadata"
    },
    correctAnswer: "B",
    code: null,
    explanation: "File .gitattributes định nghĩa attributes cho paths, như xử lý line endings (text/binary), merge strategies, diff algorithms. Ví dụ: '*.sh text eol=lf' đảm bảo shell scripts dùng LF endings."
  },
  {
    question: "What line ending issue does .gitattributes help solve?",
    options: {
      A: "Ending sentences",
      B: "Cross-platform line ending conflicts (CRLF vs LF)",
      C: "Network line issues",
      D: "Code line limits"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Windows dùng CRLF (\\r\\n), Unix/Mac dùng LF (\\n) cho line endings. .gitattributes với '* text=auto' tự động normalize line endings, tránh conflicts và spurious diffs."
  },
  {
    question: "What does 'git submodule' allow you to do?",
    options: {
      A: "Create sub-branches",
      B: "Include and track other Git repositories within your repository",
      C: "Split repository into modules",
      D: "Create smaller versions"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Git submodules cho phép include repository khác như một subdirectory trong repository chính, giữ riêng history. Hữu ích cho dependencies hoặc shared libraries."
  },
  {
    question: "What does 'git worktree' allow you to do?",
    options: {
      A: "Work on trees",
      B: "Check out multiple branches simultaneously in different directories",
      C: "Creates work logs",
      D: "Organizes files into tree structure"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git worktree' tạo linked working directories, cho phép checkout nhiều branches cùng lúc ở các thư mục khác nhau. Tiện khi cần làm việc trên nhiều features song song."
  },
  {
    question: "What does 'git bundle' do?",
    options: {
      A: "Bundles files together",
      B: "Creates a single file containing repository data for offline transfer",
      C: "Packages for deployment",
      D: "Creates zip files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git bundle' đóng gói repository hoặc một phần repository thành một file để transfer offline. Hữu ích khi không có network access hoặc firewall chặn Git protocol."
  },
  {
    question: "What is 'git filter-branch' used for?",
    options: {
      A: "Filtering logs",
      B: "Rewriting Git history by applying filters (deprecated, use git-filter-repo)",
      C: "Creating branch filters",
      D: "Filtering files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git filter-branch' dùng để rewrite history ở quy mô lớn (xóa sensitive data, thay đổi author). ĐÃ DEPRECATED, nên dùng 'git-filter-repo' thay thế vì nhanh và an toàn hơn."
  },
  {
    question: "What does 'git gc' do?",
    options: {
      A: "Git compiler",
      B: "Garbage collection - cleans up and optimizes the repository",
      C: "Git counter",
      D: "Global commit"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git gc' (garbage collection) dọn dẹp unnecessary files và optimize repository. Git tự động chạy định kỳ, nhưng có thể chạy manual để giảm disk usage và tăng performance."
  },
  {
    question: "What is the three areas/stages model in Git?",
    options: {
      A: "Three branches",
      B: "Working Directory, Staging Area (Index), Repository",
      C: "Local, Remote, Cloud",
      D: "Past, Present, Future"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Git có 3 khu vực: Working Directory (files bạn đang làm việc), Staging Area/Index (files chuẩn bị commit), và Repository (.git directory - lịch sử commits). Hiểu 3 areas này rất quan trọng!"
  },
  {
    question: "Which command moves changes from Working Directory to Staging Area?",
    options: {
      A: "git commit",
      B: "git add",
      C: "git push",
      D: "git stage"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git add' di chuyển changes từ Working Directory vào Staging Area. Đây là bước chuẩn bị cho commit."
  },
  {
    question: "Which command moves changes from Staging Area to Repository?",
    options: {
      A: "git add",
      B: "git commit",
      C: "git save",
      D: "git store"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git commit' di chuyển changes từ Staging Area vào Repository, tạo một snapshot mới trong lịch sử. Đây là bước finalize changes."
  },
  {
    question: "In .gitignore, what does '!' at the beginning of a line do?",
    options: {
      A: "Important file",
      B: "Negates the pattern (un-ignores files)",
      C: "Exclamation mark",
      D: "Warning"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Dấu '!' ở đầu dòng trong .gitignore negate (đảo ngược) pattern. Dùng để un-ignore files đã bị ignore bởi pattern trước đó. Ví dụ: '*.log' ignore all logs, '!important.log' giữ lại file này."
  },
  {
    question: "What happens if you commit without staging (git commit -a)?",
    options: {
      A: "Error occurs",
      B: "All tracked modified files are automatically staged and committed",
      C: "Nothing happens",
      D: "Repository is deleted"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git commit -a' (hoặc -am với message) tự động stage tất cả tracked modified files và commit. Tiện lợi nhưng cẩn thận vì có thể commit nhầm files không muốn."
  },
  {
    question: "How do you rename a branch?",
    options: {
      A: "git branch -r old new",
      B: "git branch -m old-name new-name",
      C: "git rename old new",
      D: "git branch --rename old new"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git branch -m old-name new-name' rename branch. Nếu đang ở branch cần rename, chỉ cần 'git branch -m new-name'. -m là move/rename."
  },
  {
    question: "What does 'git log --follow filename' do?",
    options: {
      A: "Follows you on Git",
      B: "Shows commit history of a file including renames",
      C: "Tracks file changes",
      D: "Follows branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log --follow filename' hiển thị lịch sử commit của file kể cả khi file đã bị rename. Mặc định 'git log filename' không theo dõi qua renames."
  },
  {
    question: "What is a 'fork' on GitHub?",
    options: {
      A: "A eating utensil",
      B: "A personal copy of someone else's repository on your GitHub account",
      C: "A branch",
      D: "A merge conflict"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Fork trên GitHub là một bản copy của repository người khác vào account của bạn. Cho phép bạn freely experiment mà không ảnh hưởng original project. Thường dùng cho contributing to open source."
  },
  {
    question: "What is 'upstream' in the context of forked repositories?",
    options: {
      A: "Going up the river",
      B: "The original repository that you forked from",
      C: "The newest version",
      D: "Your local repository"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'Upstream' là original repository mà bạn fork từ đó. 'Origin' là fork của bạn. Thường add upstream remote để pull updates từ original repo: 'git remote add upstream URL'."
  },
  {
    question: "What does 'git fetch upstream' do in a forked repository?",
    options: {
      A: "Fetches your changes",
      B: "Downloads changes from the original repository",
      C: "Uploads to upstream",
      D: "Synchronizes branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git fetch upstream' tải về changes từ original repository (upstream). Sau đó có thể merge vào local branch để sync với original repo."
  },
  {
    question: "What is a merge conflict marker?",
    options: {
      A: "A type of pen",
      B: "Special symbols (<<<<<<<, =======, >>>>>>>) that mark conflicting sections",
      C: "A person who marks conflicts",
      D: "A branch marker"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Khi có conflict, Git thêm markers: <<<<<<< HEAD (your changes), ======= (separator), >>>>>>> branch-name (incoming changes). Bạn phải xóa markers này sau khi resolve conflict."
  },
  {
    question: "After resolving merge conflicts, what should you do?",
    options: {
      A: "Nothing",
      B: "Stage the resolved files with 'git add' and complete the merge with 'git commit'",
      C: "Delete the files",
      D: "Restart Git"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Sau khi resolve conflicts, dùng 'git add' để stage resolved files, sau đó 'git commit' (hoặc 'git merge --continue' cho merge, 'git rebase --continue' cho rebase)."
  },
  {
    question: "What does 'git merge --abort' do?",
    options: {
      A: "Aborts Git",
      B: "Cancels the merge and returns to pre-merge state",
      C: "Aborts all operations",
      D: "Deletes branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git merge --abort' hủy merge operation và quay về trạng thái trước khi merge. Hữu ích khi gặp quá nhiều conflicts hoặc merge nhầm."
  },
  {
    question: "What is 'fast-forward' vs 'no-fast-forward' merge?",
    options: {
      A: "Speed differences",
      B: "Fast-forward moves branch pointer; no-fast-forward always creates merge commit",
      C: "Different merge algorithms",
      D: "Forward vs backward merge"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Fast-forward chỉ di chuyển branch pointer (linear history). No-fast-forward (--no-ff) luôn tạo merge commit, giữ rõ ràng feature branch history ngay cả khi có thể fast-forward."
  },
  {
    question: "What does 'git stash branch branch-name' do?",
    options: {
      A: "Stashes a branch",
      B: "Creates a new branch from stash and applies the stash to it",
      C: "Branches a stash",
      D: "Stashes and branches simultaneously"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git stash branch branch-name' tạo branch mới từ commit khi stash được tạo, checkout branch đó, apply stash, và drop stash nếu apply thành công. Hữu ích khi stash gây conflicts."
  },
  {
    question: "Can you have multiple .gitignore files in a repository?",
    options: {
      A: "No, only one at root",
      B: "Yes, you can have .gitignore in subdirectories with specific rules",
      C: "Maximum two",
      D: "Only in the .git folder"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Có thể có nhiều .gitignore files trong các subdirectories. Mỗi .gitignore áp dụng rules cho directory đó và subdirectories. Patterns trong parent directories vẫn có hiệu lực."
  },
  {
    question: "What is the purpose of 'git fetch' before 'git merge'?",
    options: {
      A: "Not necessary",
      B: "To get latest changes from remote without automatically merging",
      C: "To speed up merge",
      D: "To fix errors"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git fetch' tải changes từ remote mà không tự động merge, cho phép review changes trước. Sau đó có thể 'git merge' khi sẵn sàng. 'git pull' = 'git fetch' + 'git merge'."
  },
  {
    question: "What does 'git rebase -i --root' allow you to do?",
    options: {
      A: "Root access to Git",
      B: "Interactive rebase of all commits including the first commit",
      C: "Delete root directory",
      D: "Rebase only root files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git rebase -i --root' cho phép interactive rebase toàn bộ lịch sử từ commit đầu tiên. Mạnh mẽ để clean up toàn bộ history, nhưng cẩn thận với shared repositories!"
  },
  {
    question: "What happens if you delete a branch that has unmerged commits?",
    options: {
      A: "Git deletes it without warning",
      B: "Git prevents deletion with -d, but allows with -D",
      C: "Commits are automatically merged",
      D: "Repository becomes corrupted"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git branch -d' (safe delete) từ chối xóa branch chưa merge để bảo vệ work. 'git branch -D' (force delete) xóa bất kể trạng thái. Luôn cẩn thận với -D!"
  },
  {
    question: "What does 'git commit --fixup=commit-hash' do?",
    options: {
      A: "Fixes up your repository",
      B: "Creates a fixup commit for later squashing in interactive rebase",
      C: "Repairs corrupted commits",
      D: "Fixes commit errors"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git commit --fixup=hash' tạo fixup commit với message 'fixup! original-message'. Khi rebase với --autosquash, fixup commit tự động squash vào commit target. Workflow pro!"
  },
  {
    question: "What does 'git rebase -i --autosquash' do?",
    options: {
      A: "Automatically squashes bugs",
      B: "Automatically reorders and squashes fixup/squash commits",
      C: "Squashes all commits",
      D: "Creates auto-commits"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git rebase -i --autosquash' tự động sắp xếp và squash các fixup!/squash! commits vào target commits của chúng. Kết hợp với --fixup để clean history hiệu quả."
  },
  {
    question: "What is 'git cherry' used for?",
    options: {
      A: "Picking cherries",
      B: "Finding commits that haven't been merged upstream",
      C: "Cherry picking automatically",
      D: "Creating cherry branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git cherry branch upstream' tìm commits trong branch chưa được merge vào upstream. Hiển thị + (chưa merge) hoặc - (đã merge). Hữu ích để track what needs to be pushed/merged."
  },
  {
    question: "What does 'git apply' do?",
    options: {
      A: "Applies for a job",
      B: "Applies a patch file to the working directory",
      C: "Applies changes automatically",
      D: "Applies configurations"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git apply patch-file' áp dụng patch file (tạo bằng git diff) vào working directory. Khác với 'git am', apply không tạo commit, chỉ thay đổi files."
  },
  {
    question: "What does 'git am' do?",
    options: {
      A: "Morning Git",
      B: "Applies patches from mailbox format and creates commits",
      C: "Automatic merge",
      D: "Adds messages"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git am' (apply mailbox) áp dụng patches từ email format và tự động tạo commits với author info và messages từ patch. Dùng trong email-based workflows."
  },
  {
    question: "What does 'git format-patch' do?",
    options: {
      A: "Formats code",
      B: "Generates patch files from commits for email submission",
      C: "Formats patches nicely",
      D: "Creates format documentation"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git format-patch' tạo patch files từ commits, format phù hợp cho email submission. Mỗi commit thành một .patch file. Dùng trong open source email workflows."
  },
  {
    question: "What does 'git request-pull' do?",
    options: {
      A: "Requests help",
      B: "Generates a summary of changes for pull request",
      C: "Pulls requests from server",
      D: "Requests permissions"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git request-pull' tạo summary message mô tả changes để gửi maintainers, bao gồm commit range và diffstat. Dùng trong email-based workflows thay vì GitHub PRs."
  },
  {
    question: "What is 'git notes' used for?",
    options: {
      A: "Taking notes during coding",
      B: "Adding notes to commits without changing commit hash",
      C: "Creating note files",
      D: "Noting errors"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git notes' thêm metadata/notes vào commits mà KHÔNG thay đổi commit hash. Notes riêng biệt với commit, có thể fetch/push riêng. Hữu ích cho code reviews, build status."
  },
  {
    question: "What does 'git grep pattern' do?",
    options: {
      A: "Greets patterns",
      B: "Searches for pattern in tracked files",
      C: "Groups patterns",
      D: "Generates patterns"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git grep pattern' tìm kiếm pattern trong tracked files của repository. Nhanh hơn regular grep vì chỉ search tracked files, tôn trọng .gitignore. Có nhiều options như -n (line numbers)."
  },
  {
    question: "What does 'git bisect start' begin?",
    options: {
      A: "Starting Git",
      B: "A binary search process to find the commit that introduced a bug",
      C: "Bisecting branches",
      D: "Starting a section"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git bisect start' bắt đầu binary search để tìm bad commit. Sau đó mark commits là good/bad, Git tự động checkout middle commits để test. Rất hiệu quả: log(n) thay vì n tests!"
  },
  {
    question: "In git bisect, what do 'git bisect good' and 'git bisect bad' do?",
    options: {
      A: "Judge code quality",
      B: "Mark commits as working or broken to narrow down the problematic commit",
      C: "Sort commits",
      D: "Create good/bad branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Trong bisect, 'git bisect good' mark commit hiện tại là working, 'git bisect bad' mark là broken. Git dùng thông tin này để narrow down range và checkout commit tiếp theo để test."
  },
  {
    question: "What does 'git fsck' do?",
    options: {
      A: "File system check",
      B: "Verifies connectivity and validity of objects in Git database",
      C: "Fast check",
      D: "Fixes errors"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git fsck' (file system check) kiểm tra integrity của Git database, tìm corrupted hoặc dangling objects. Hữu ích để diagnose repository issues hoặc recover lost commits."
  },
  {
    question: "What does 'git prune' do?",
    options: {
      A: "Prunes branches",
      B: "Removes unreachable objects from the object database",
      C: "Prunes files",
      D: "Cleans code"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git prune' xóa objects không còn reachable từ any branch/tag. Thường không cần chạy manual vì 'git gc' tự động chạy prune. Cẩn thận vì có thể mất dangling commits!"
  },
  {
    question: "What is the difference between 'git fetch --prune' and 'git prune'?",
    options: {
      A: "They are the same",
      B: "'git fetch --prune' removes stale remote-tracking branches; 'git prune' removes unreachable objects",
      C: "Fetch prune is faster",
      D: "No real difference"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git fetch --prune' xóa local remote-tracking branches khi remote branch đã bị delete. 'git prune' xóa unreachable objects trong database. Hai lệnh hoàn toàn khác mục đích!"
  },
  {
    question: "What does 'git ls-files' show?",
    options: {
      A: "Lists directories",
      B: "Shows information about files in the index and working tree",
      C: "Lists large files",
      D: "Long list of files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git ls-files' hiển thị files trong index (staging area) và working tree. Có nhiều options: -c (cached), -m (modified), -o (others/untracked), -i (ignored). Công cụ low-level nhưng mạnh."
  },
  {
    question: "What does 'git ls-tree' show?",
    options: {
      A: "Lists tree structure",
      B: "Shows tree object contents including files and subdirectories",
      C: "Lists branches in tree format",
      D: "Long listing of trees"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git ls-tree' hiển thị contents của tree object (directories trong Git). Mỗi dòng show mode, type, hash, và name. Low-level command để explore Git's internal structure."
  },
  {
    question: "What is 'git rev-parse' used for?",
    options: {
      A: "Reversing commits",
      B: "Parsing revision parameters and returning commit hashes",
      C: "Reviewing code",
      D: "Parsing files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git rev-parse' converts symbolic references (HEAD, branch names, tags) thành commit hashes. Ví dụ: 'git rev-parse HEAD' returns full hash của current commit. Dùng trong scripts."
  },
  {
    question: "What does 'git symbolic-ref HEAD' show?",
    options: {
      A: "Symbolic representation",
      B: "The current branch reference that HEAD points to",
      C: "Symbols in HEAD",
      D: "Reference manual"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git symbolic-ref HEAD' hiển thị symbolic reference mà HEAD đang trỏ đến (ví dụ: refs/heads/main). Trong detached HEAD state, lệnh này sẽ báo lỗi vì HEAD trỏ trực tiếp đến commit."
  },
  {
    question: "What does 'git update-ref' do?",
    options: {
      A: "Updates files",
      B: "Updates object references (branches, tags) to point to new commits",
      C: "Updates remote references",
      D: "Refreshes references"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git update-ref' update reference (branch, tag) để trỏ đến commit khác. Low-level command, thường dùng trong scripts. Ví dụ: 'git update-ref refs/heads/main new-hash'."
  },
  {
    question: "When collaborating, should you rebase shared branches?",
    options: {
      A: "Yes, always",
      B: "No, it rewrites history and causes problems for others",
      C: "Only on Mondays",
      D: "Doesn't matter"
    },
    correctAnswer: "B",
    code: null,
    explanation: "KHÔNG NÊN rebase shared/public branches! Rebase thay đổi history, gây conflicts và confusion cho collaborators. Golden rule: chỉ rebase local/personal branches, dùng merge cho shared branches."
  },
  {
    question: "What does 'git commit -v' do?",
    options: {
      A: "Verbose commit",
      B: "Shows diff in the commit message editor",
      C: "Version commit",
      D: "Validates commit"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git commit -v' (verbose) hiển thị full diff trong editor khi viết commit message. Giúp review changes kỹ hơn trước khi commit."
  },
  {
    question: "What does 'git log --merges' show?",
    options: {
      A: "All commits",
      B: "Only merge commits",
      C: "Merged branches",
      D: "Merge conflicts"
    },
    correctAnswer: "B",
    code: null,
    explanation: "Lệnh 'git log --merges' chỉ hiển thị merge commits (commits có 2+ parents). Ngược lại, --no-merges bỏ qua merge commits, chỉ show regular commits."
  },
  {
    question: "What does 'git log --first-parent' do?",
    options: {
      A: "Shows first commit",
      B: "Follows only the first parent of merge commits",
      C: "Shows parent directory",
      D: "Lists first contributors"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git log --first-parent' chỉ follow first parent của merge commits, bỏ qua merged branches. Hữu ích để xem main branch history mà không bị 'nhiễu' bởi feature branch commits."
  },
  {
    question: "What does 'git rebase --onto newbase upstream branch' do?",
    options: {
      A: "Simple rebase",
      B: "Rebases commits from upstream..branch onto newbase",
      C: "Creates three branches",
      D: "Merges onto newbase"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git rebase --onto newbase upstream branch' rebase commits trong range upstream..branch lên newbase. Advanced technique để transplant commits hoặc remove commits khỏi history."
  },
  {
    question: "What is 'git rerere'?",
    options: {
      A: "A rare command",
      B: "Reuse recorded resolution - remembers how you resolved conflicts",
      C: "Re-read errors",
      D: "Rerun commands"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git rerere' (reuse recorded resolution) ghi nhớ cách bạn resolve conflicts. Lần sau gặp conflict tương tự, Git tự động apply resolution. Enable với 'git config --global rerere.enabled true'."
  },
  {
    question: "What does 'git pull --rebase=preserve' do (now deprecated)?",
    options: {
      A: "Preserves files",
      B: "Rebases while preserving merge commits",
      C: "Preserves history",
      D: "Protective pull"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git pull --rebase=preserve' rebase nhưng giữ merge commits trong local history. ĐÃ DEPRECATED, thay bằng '--rebase=merges' trong Git 2.18+."
  },
  {
    question: "What does 'git range-diff' do?",
    options: {
      A: "Shows diff in ranges",
      B: "Compares two commit ranges to see how they differ",
      C: "Calculates range",
      D: "Finds differences"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git range-diff' so sánh hai commit ranges (ví dụ: versions của cùng feature branch). Hữu ích để xem changes giữa v1 và v2 của pull request sau rebase/amendments."
  },
  {
    question: "What is the purpose of 'git maintenance'?",
    options: {
      A: "Fixes bugs",
      B: "Runs maintenance tasks to optimize repository performance",
      C: "Maintains branches",
      D: "Repairs files"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git maintenance' (Git 2.30+) chạy background tasks để optimize repo: incremental repack, commit-graph, loose objects cleanup. Có thể schedule automatic runs."
  },
  {
    question: "What does 'git sparse-checkout' enable?",
    options: {
      A: "Sparse commits",
      B: "Checking out only a subset of files from the repository",
      C: "Sparse branches",
      D: "Checking sparsely"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git sparse-checkout' cho phép checkout chỉ một subset của files, không phải toàn bộ repository. Cực kỳ hữu ích cho monorepos lớn khi bạn chỉ cần làm việc với một phần nhỏ."
  },
  {
    question: "What is 'git switch --orphan new-branch'?",
    options: {
      A: "Switches to orphan",
      B: "Creates a new branch with no commit history",
      C: "Switches to old branch",
      D: "Adopts branches"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git switch --orphan new-branch' tạo branch mới không có parent commits (orphan). Hữu ích để tạo gh-pages branch hoặc start fresh history trong cùng repo."
  },
  {
    question: "What does 'git push --atomic' do?",
    options: {
      A: "Atomic push",
      B: "Ensures all refs are updated or none (all-or-nothing push)",
      C: "Pushes atoms",
      D: "Automatic push"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git push --atomic' đảm bảo tất cả refs được update hoặc không ref nào (atomic transaction). Nếu một ref fail, tất cả đều fail. Tránh partial updates khi push multiple branches."
  },
  {
    question: "What does 'git push --mirror' do?",
    options: {
      A: "Creates mirror",
      B: "Pushes all refs (branches, tags) and mirrors repository structure",
      C: "Reflects changes",
      D: "Duplicates repository"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git push --mirror' push ALL refs (branches, tags, remote-tracking) và mirror repository structure. Dùng để tạo exact copy hoặc migrate repository. Cẩn thận vì có thể overwrite!"
  },
  {
    question: "What is 'git instaweb'?",
    options: {
      A: "Instagram for Git",
      B: "Instantly starts a web server to browse repository via gitweb",
      C: "Instant website",
      D: "Web installer"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git instaweb' tự động start web server (gitweb) để browse repository qua web browser. Tiện để quick visualization của repo. Dùng 'git instaweb --stop' để tắt."
  },
  {
    question: "What does 'git replace' do?",
    options: {
      A: "Replaces files",
      B: "Creates references to replace one object with another",
      C: "Finds and replaces text",
      D: "Replaces commits"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git replace' tạo references để 'thay thế' một object bằng object khác khi display. Không thay đổi thực tế objects. Dùng để graft history hoặc fix mistakes mà không rewrite history."
  },
  {
    question: "What does 'git interpret-trailers' do?",
    options: {
      A: "Translates messages",
      B: "Parses and modifies commit message trailers (Signed-off-by, etc.)",
      C: "Interprets errors",
      D: "Reads trailers"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git interpret-trailers' parse và manipulate commit message trailers (lines ở cuối commit message như 'Signed-off-by: Name <email>'). Dùng để add/modify metadata theo format chuẩn."
  },
  {
    question: "What is the purpose of '.git/info/exclude' file?",
    options: {
      A: "Excludes information",
      B: "Personal gitignore rules not shared with repository",
      C: "Excludes folders",
      D: "Information file"
    },
    correctAnswer: "B",
    code: null,
    explanation: "File '.git/info/exclude' giống .gitignore nhưng local-only, không được commit. Dùng cho personal ignore patterns không muốn share (IDE settings, personal scripts). .gitignore dùng cho shared rules."
  },
  {
    question: "What does 'git credential' help manage?",
    options: {
      A: "Credit cards",
      B: "Username and password credentials for remote repositories",
      C: "User credentials system-wide",
      D: "SSH credentials"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git credential' system quản lý usernames/passwords cho remote repos. Có thể configure credential helpers để cache hoặc store credentials: 'git config credential.helper cache'."
  },
  {
    question: "What is 'git multi-pack-index'?",
    options: {
      A: "Multiple packages",
      B: "An index of multiple pack files for improved performance",
      C: "Packing tool",
      D: "Multiple repositories"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git multi-pack-index' tạo index spanning multiple pack files, cải thiện performance khi repo có nhiều packs. Part của modern Git optimization features."
  },
  {
    question: "What does 'git switch -' do?",
    options: {
      A: "Switches off Git",
      B: "Switches to the previously checked out branch",
      C: "Switches minus mode",
      D: "Removes switch"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git switch -' (hoặc 'git checkout -') chuyển về branch trước đó, giống 'cd -' trong shell. Shortcut tiện lợi để toggle giữa hai branches đang làm việc."
  },
  {
    question: "When should you use 'git pull' vs 'git fetch + git merge'?",
    options: {
      A: "Always use git pull",
      B: "'git pull' for quick sync; 'fetch + merge' when you want to review changes first",
      C: "They are exactly the same",
      D: "Never use git pull"
    },
    correctAnswer: "B",
    code: null,
    explanation: "'git pull' tiện và nhanh cho simple sync. 'git fetch + git merge' tốt hơn khi muốn review remote changes (với git log, git diff) trước khi merge, tránh bất ngờ và conflicts."
  }
]
