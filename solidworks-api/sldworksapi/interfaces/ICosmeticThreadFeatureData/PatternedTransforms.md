---
type: property
interface: ICosmeticThreadFeatureData
member: PatternedTransforms
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticThreadFeatureData.IGetPatternedTransforms
keywords:
  - patternedtransforms
  - icosmeticthreadfeaturedata
  - cosmetic
  - thread
  - feature
  - data
  - patterned
  - transforms
  - object
  - threads
  - features
  - part
  - vba
readonly: true
---

# ICosmeticThreadFeatureData.PatternedTransforms

Gets the transforms from this cosmetic thread for all of the instances of this cosmetic thread that are patterns of this feature.

## Signature

```csharp
System.Object PatternedTransforms {get;}
```
## Parameters

None.

## Return Value

Array of the transforms of the instances of this cosmetic thread

## Remarks

The value returned by this property does not include this cosmetic thread, which is the seed feature and not a pattern instance. Therefore, if this cosmetic thread is not used in a pattern feature, then
ICosmeticThreadFeatureData::GetPatternedTransformsCount
returns 0 and this property returns an empty array.

## Examples

- Get Cosmetic Threads Features in a Part (VBA) (Get_Cosmetic_Threads_in_a_Part_Document_Example_VB.htm)

## See Also

- `ICosmeticThreadFeatureData.IGetPatternedTransforms`