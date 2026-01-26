---
type: method
interface: ICombineBodiesFeatureData
member: IGetBodiesToCombine
returns: Body2
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of bodies to combine
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICombineBodiesFeatureData.BodiesToCombine
  - ICombineBodiesFeatureData.ISetBodiesToCombine
keywords:
  - igetbodiestocombine
  - icombinebodiesfeaturedata
  - combine
  - bodies
  - feature
  - data
  - count
  - int32
  - body2
---

# ICombineBodiesFeatureData.IGetBodiesToCombine

Gets the bodies to combine.

## Signature

```csharp
Body2 IGetBodiesToCombine( 
   System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of bodies to combine

## Return Value

in-process, unmanaged C++: Pointer to an array of bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ICombineBodiesFeatureData::GetBodiesToCombineCount
before calling this method to determine the size of the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICombineBodiesFeatureData.BodiesToCombine`
- `ICombineBodiesFeatureData.ISetBodiesToCombine`