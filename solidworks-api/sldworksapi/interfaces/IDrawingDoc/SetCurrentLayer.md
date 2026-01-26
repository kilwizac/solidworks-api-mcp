---
type: method
interface: IDrawingDoc
member: SetCurrentLayer
returns: System.Boolean
parameters:
  -
    name: Layername
    type: System.String
    description: Name of the layer
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ChangeComponentLayer
  - IDrawingDoc.CreateLayer
  - ILayer
  - ILayerMgr
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - layers
  - layer
  - ilayer
  - ilayermgr
  - interfaces
  - setcurrentlayer
  - drawing
  - doc
  - current
  - layername
  - string
  - boolean
---

# IDrawingDoc.SetCurrentLayer

Sets the current layer used by this document.

## Signature

```csharp
System.Boolean SetCurrentLayer( 
   System.String
Layername
)
```
## Parameters

- `Layername` (System.String): Name of the layer

## Return Value

Unknown.

## Remarks

SOLIDWORKS creates subsequent items on the specified layer.

## See Also

- `IDrawingDoc.ChangeComponentLayer`
- `IDrawingDoc.CreateLayer`
- `ILayer`
- `ILayerMgr`