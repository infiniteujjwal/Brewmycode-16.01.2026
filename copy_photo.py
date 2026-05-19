import shutil
import os
home = os.path.expanduser('~')
src = os.path.join(home, '.gemini', 'antigravity', 'brain', '81249057-4ba2-4001-b8b5-6c0e58010ffb', 'media__1779188116361.png')
shutil.copy(src, 'public/eerika.png')
