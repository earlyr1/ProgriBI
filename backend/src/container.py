from typing import String, Iterable, Optional

import numpy as np

class Container:

    possible_dtypes = [np.int64, np.float64, np.datetime64, np.unicode_]
    def __init__(self, fname: String, dtypes: Optional[Iterable[np.dtype]]):
        try:    
            with open(fname) as f:
                pass