---
type: property
interface: ICThread
member: PatternedTransforms
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - patternedtransforms
  - icthread
  - ic
  - thread
  - patterned
  - transforms
  - object
  - cosmetic
  - annotations
  - data
  - vb
  - net
  - vba
readonly: true
---

# ICThread.PatternedTransforms

Gets the transforms from this cosmetic thread for all of the instances of this cosmetic thread that are patterns of this feature.

## Signature

```csharp
System.Object PatternedTransforms {get;}
```
## Parameters

None.

## Return Value

Array of transforms for the instances of this cosmetic thread

## Remarks

The value returned by this property does not include this cosmetic thread, which is the seed feature and not an pattern instance.
Therefore, if this cosmetic thread is not used in a pattern feature, then
ICThreadFeatureData::GetTransformsPatternedCount
returns 0 and this property returns an empty array.

## Examples

- Get Patterned Cosmetic Thread Annotations Data (C#) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_CSharp.htm)
- Get Patterned Cosmetic Thread Annotations Data (VB.NET) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VBNET.htm)
- Get Patterned Cosmetic Thread Annotations Data (VBA) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VB.htm)