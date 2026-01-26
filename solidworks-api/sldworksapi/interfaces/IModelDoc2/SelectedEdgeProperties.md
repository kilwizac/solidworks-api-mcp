---
type: method
interface: IModelDoc2
member: SelectedEdgeProperties
returns: System.Boolean
parameters:
  -
    name: EdgeName
    type: System.String
    description: Name of the edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - selections
  - ui
related:
  - IEdge
  - IModelDoc2.EntityProperties
  - IModelDoc2.SelectedFaceProperties
  - IModelDoc2.SelectedFeatureProperties
keywords:
  - edge
  - see
  - also
  - iedge
  - properties
  - edges
  - selectededgeproperties
  - imodeldoc2
  - model
  - doc2
  - selected
  - name
  - string
  - boolean
---

# IModelDoc2.SelectedEdgeProperties

Sets the property values of the selected edge.

## Signature

```csharp
System.Boolean SelectedEdgeProperties( 
   System.String
EdgeName
)
```
## Parameters

- `EdgeName` (System.String): Name of the edge

## Return Value

True if edge properties successfully changed, false if not

## Remarks

If the edge...
Then this method...
Does not have a name
Sets the name.
Has a name
Does not change the name and returns false.
This behavior is intended to prevent a program from renaming an edge that is referenced in some other location.
For example, if an assembly contains a mate to an edge on a part, then a name is automatically assigned to that edge. If you change that name, then there is no guarantee that the mate remains valid. Therefore, when using entity names, you should first check to see if the entity is already named, and if so, use the existing name. If no name exists for the edge, then you can give the edge a name.

## See Also

- `IEdge`
- `IModelDoc2.EntityProperties`
- `IModelDoc2.SelectedFaceProperties`
- `IModelDoc2.SelectedFeatureProperties`