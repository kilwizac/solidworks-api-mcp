---
type: method
interface: IMacroFeatureData
member: IGetEditBodies
returns: void
parameters:
  -
    name: BodiesCount
    type: System.Int32
    description: Number of bodies to be modified by this macro feature
  -
    name: PBodies
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies to be modified by this macro feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.EditBodies
  - IMacroFeatureData.EnableMultiBodyConsume
  - IMacroFeatureData.ISetEditBodies
keywords:
  - igeteditbodies
  - imacrofeaturedata
  - macro
  - feature
  - data
  - edit
  - bodies
  - count
  - int32
  - body2
  - void
---

# IMacroFeatureData.IGetEditBodies

Gets the bodies to be modified by this macro feature.

## Signature

```csharp
void IGetEditBodies( 
   System.Int32
BodiesCount
,
   out Body2
PBodies
)
```
## Parameters

- `BodiesCount` (System.Int32): Number of bodies to be modified by this macro feature
- `PBodies` (Body2): in-process, unmanaged C++: Pointer to an array of bodies to be modified by this macro feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IMacroFeatureData::GetEditBodiesCount
to determine the size the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.EditBodies`
- `IMacroFeatureData.EnableMultiBodyConsume`
- `IMacroFeatureData.ISetEditBodies`