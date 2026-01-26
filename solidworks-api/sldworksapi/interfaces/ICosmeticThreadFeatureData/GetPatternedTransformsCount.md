---
type: method
interface: ICosmeticThreadFeatureData
member: GetPatternedTransformsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticThreadFeatureData.PatternedTransforms
keywords:
  - getpatternedtransformscount
  - icosmeticthreadfeaturedata
  - cosmetic
  - thread
  - feature
  - data
  - patterned
  - transforms
  - count
  - int32
  - threads
  - features
  - part
  - vba
---

# ICosmeticThreadFeatureData.GetPatternedTransformsCount

Gets the number of instances of this cosmetic thread that are patterns of this feature.

## Signature

```csharp
System.Int32 GetPatternedTransformsCount()
```
## Parameters

None.

## Return Value

Number of instances of this cosmetic thread that are patterns of this feature

## Remarks

The value returned by this method does not include this cosmetic thread, which is the seed feature and not an instance of the pattern. Therefore, if this cosmetic thread is not used in any pattern feature, then this method returns 0.
Use this method before using
ICosmeticThreadFeatureData::IGetPatternedTransforms
to determine the size of the array to pass to that method.

## Examples

- Get Cosmetic Threads Features in a Part (VBA) (Get_Cosmetic_Threads_in_a_Part_Document_Example_VB.htm)

## See Also

- `ICosmeticThreadFeatureData.PatternedTransforms`