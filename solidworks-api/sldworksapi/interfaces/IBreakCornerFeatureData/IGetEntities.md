---
type: method
interface: IBreakCornerFeatureData
member: IGetEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces or edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBreakCornerFeatureData.Entities
  - IBreakCornerFeatureData.ISetEntities
keywords:
  - igetentities
  - ibreakcornerfeaturedata
  - break
  - corner
  - feature
  - data
  - entities
  - count
  - int32
  - object
---

# IBreakCornerFeatureData.IGetEntities

Gets the faces or edges to which this break corner is applied.

## Signature

```csharp
System.Object IGetEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces or edges

## Return Value

in-process, unmanaged C++: Pointer to an array of faces or edges of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IBreakCornerFeatureData::GetEntitiesCount
before calling this method. See Access Selections that Define Features for additional details on using this method.

## See Also

- `IBreakCornerFeatureData.Entities`
- `IBreakCornerFeatureData.ISetEntities`