---
type: method
interface: IRefPlaneFeatureData
member: ISetSelections
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected entities
  -
    name: Entities
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefPlaneFeatureData.GetSelectionsCount
  - IRefPlaneFeatureData.IGetSelections
  - IRefPlaneFeatureData.Selections
keywords:
  - isetselections
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - selections
  - count
  - int32
  - entities
  - object
  - void
---

# IRefPlaneFeatureData.ISetSelections

Sets the entities to use to create the reference plane feature.

## Signature

```csharp
void ISetSelections( 
   System.Int32
Count
,
   ref System.Object
Entities
)
```
## Parameters

- `Count` (System.Int32): Number of selected entities
- `Entities` (System.Object): in-process, unmanaged C++: Pointer to an array of entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.
IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.GetSelectionsCount`
- `IRefPlaneFeatureData.IGetSelections`
- `IRefPlaneFeatureData.Selections`