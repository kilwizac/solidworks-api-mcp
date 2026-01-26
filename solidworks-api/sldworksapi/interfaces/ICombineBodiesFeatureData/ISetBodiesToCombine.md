---
type: method
interface: ICombineBodiesFeatureData
member: ISetBodiesToCombine
returns: void
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of bodies to combine
  -
    name: PBodiesToCombine
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICombineBodiesFeatureData.BodiesToCombine
  - ICombineBodiesFeatureData.GetBodiesToCombineCount
  - ICombineBodiesFeatureData.IGetBodiesToCombine
keywords:
  - isetbodiestocombine
  - icombinebodiesfeaturedata
  - combine
  - bodies
  - feature
  - data
  - count
  - int32
  - body2
  - void
---

# ICombineBodiesFeatureData.ISetBodiesToCombine

Sets the bodies to combine.

## Signature

```csharp
void ISetBodiesToCombine( 
   System.Int32
NCount
,
   ref Body2
PBodiesToCombine
)
```
## Parameters

- `NCount` (System.Int32): Number of bodies to combine
- `PBodiesToCombine` (Body2): in-process, unmanaged C++: Pointer to an array of bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICombineBodiesFeatureData.BodiesToCombine`
- `ICombineBodiesFeatureData.GetBodiesToCombineCount`
- `ICombineBodiesFeatureData.IGetBodiesToCombine`