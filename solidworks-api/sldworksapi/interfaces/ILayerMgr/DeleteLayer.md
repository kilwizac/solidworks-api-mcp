---
type: method
interface: ILayerMgr
member: DeleteLayer
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of the layer to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.GetCurrentLayer
keywords:
  - deletelayer
  - ilayermgr
  - layer
  - mgr
  - delete
  - name
  - string
  - boolean
---

# ILayerMgr.DeleteLayer

Deletes the specified layer in this drawing document.

## Signature

```csharp
System.Boolean DeleteLayer( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the layer to delete

## Return Value

True if the layer was successfully deleted, false if not

## See Also

- `ILayerMgr.GetCurrentLayer`