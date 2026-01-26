---
type: method
interface: ICThread
member: IGetPatternedTransforms
returns: MathTransform
parameters:
  -
    name: Count
    type: System.Int32
    description: Size of the output array (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICThread.PatternedTransforms
keywords:
  - igetpatternedtransforms
  - icthread
  - ic
  - thread
  - patterned
  - transforms
  - count
  - int32
  - math
  - transform
---

# ICThread.IGetPatternedTransforms

Gets the transforms from this cosmetic thread for all of the instances of this cosmetic thread that are patterns of this feature.

## Signature

```csharp
MathTransform IGetPatternedTransforms( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Size of the output array (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of interface pointers to the IMathTransform objects of the instances of this cosmetic thread VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ICThreadFeatureData::GetPatternedTransformsCount
before calling
this method to determine the size of the output array.
The value returned by this method does not include this cosmetic thread, which is the seed feature and not an pattern instance.
Therefore, if this cosmetic thread is not used in a pattern feature, then ICThreadFeatureData::GetPatternedTransformsCount returns 0 and this method returns an empty array.

## See Also

- `ICThread.PatternedTransforms`