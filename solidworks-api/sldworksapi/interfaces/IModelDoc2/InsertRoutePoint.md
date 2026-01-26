---
type: method
interface: IModelDoc2
member: InsertRoutePoint
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IAssemblyDoc.GetRouteManager
  - IAssemblyDoc.IsRouteAssembly
  - IFeatureManager.InsertConnectionPoint
  - IModelDoc2.EditRoute
keywords:
  - points
  - route
  - routing
  - insertroutepoint
  - imodeldoc2
  - model
  - doc2
  - insert
  - point
  - void
---

# IModelDoc2.InsertRoutePoint

Adds a route point based on the selected point.

## Signature

```csharp
void InsertRoutePoint()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If the selection set is not complete, then the
Insert Route Point
dialog is displayed.
The route point is the point on the fitting that aligns with the sketch point when the fitting is inserted.

## See Also

- `IAssemblyDoc.GetRouteManager`
- `IAssemblyDoc.IsRouteAssembly`
- `IFeatureManager.InsertConnectionPoint`
- `IModelDoc2.EditRoute`