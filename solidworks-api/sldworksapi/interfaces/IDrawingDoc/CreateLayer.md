---
type: method
interface: IDrawingDoc
member: CreateLayer
returns: System.Boolean
parameters:
  -
    name: Layername
    type: System.String
    description: Layer name (see Remarks )
  -
    name: LayerDesc
    type: System.String
    description: Description for the new layer
  -
    name: LayerColor
    type: System.Int32
    description: COLORREF value specifying the color of items in this layer
  -
    name: LayerStyle
    type: System.Int32
    description: Line style as defined in swLineStyles_e
  -
    name: LayerWidth
    type: System.Int32
    description: Line width as defined in swLineWeights_e
  -
    name: BOn
    type: System.Boolean
    description: True makes this layer visible, false makes it invisible
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.SetCurrentLayer
  - ILayer
  - ILayerMgr
keywords:
  - createlayer
  - idrawingdoc
  - drawing
  - doc
  - create
  - layer
  - layername
  - string
  - desc
  - color
  - int32
  - style
  - width
  - boolean
---

# IDrawingDoc.CreateLayer

Obsolete. Superseded by IDrawingDoc::CreateLayer2.

## Signature

```csharp
System.Boolean CreateLayer( 
   System.String
Layername
,
   System.String
LayerDesc
,
   System.Int32
LayerColor
,
   System.Int32
LayerStyle
,
   System.Int32
LayerWidth
,
   System.Boolean
BOn
)
```
## Parameters

- `Layername` (System.String): Layer name (see Remarks )
- `LayerDesc` (System.String): Description for the new layer
- `LayerColor` (System.Int32): COLORREF value specifying the color of items in this layer
- `LayerStyle` (System.Int32): Line style as defined in swLineStyles_e
- `LayerWidth` (System.Int32): Line width as defined in swLineWeights_e
- `BOn` (System.Boolean): True makes this layer visible, false makes it invisible

## Return Value

True if the layer was created successfully, false if not

## Remarks

If this layer is not visible, then SOLIDWORKS does not display entities on the layer.
Do not use the backslash (/) or at sign (@) symbols in LayerName.

## See Also

- `IDrawingDoc.SetCurrentLayer`
- `ILayer`
- `ILayerMgr`