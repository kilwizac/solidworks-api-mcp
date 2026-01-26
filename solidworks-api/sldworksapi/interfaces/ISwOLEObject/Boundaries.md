---
type: property
interface: ISwOLEObject
member: Boundaries
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISwOLEObject.IGetBoundaries
  - ISwOLEObject.ISetBoundaries
keywords:
  - boundaries
  - iswoleobject
  - sw
  - ole
  - object
readonly: null
---

# ISwOLEObject.Boundaries

Gets or sets the boundaries for this OLE object.

## Signature

```csharp
System.Object Boundaries {get; set;}
```
## Parameters

None.

## Return Value

Array of these coordinates: Drawings: sheet coordinates Parts or assemblies: screen pixel coordinates

## See Also

- `ISwOLEObject.IGetBoundaries`
- `ISwOLEObject.ISetBoundaries`