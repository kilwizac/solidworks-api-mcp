---
type: method
interface: IDrawingDoc
member: CreateLayer2
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
  -
    name: BPrint
    type: System.Boolean
    description: True to print this layer when printing the document, false to not
docset: sldworksapi
deprecated: false
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
  - drawings
  - see
  - also
  - idrawingdoc
  - layers
  - layer
  - ilayer
  - ilayermgr
  - interfaces
  - create
  - createlayer2
  - drawing
  - doc
  - layer2
  - layername
  - string
  - desc
  - color
  - int32
  - style
  - width
  - boolean
  - print
  - selected
  - view
  - vba
  - vb
  - net
---

# IDrawingDoc.CreateLayer2

Creates a layer for this document.

## Signature

```csharp
System.Boolean CreateLayer2( 
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
,
   System.Boolean
BPrint
)
```
## Parameters

- `Layername` (System.String): Layer name (see Remarks )
- `LayerDesc` (System.String): Description for the new layer
- `LayerColor` (System.Int32): COLORREF value specifying the color of items in this layer
- `LayerStyle` (System.Int32): Line style as defined in swLineStyles_e
- `LayerWidth` (System.Int32): Line width as defined in swLineWeights_e
- `BOn` (System.Boolean): True makes this layer visible, false makes it invisible
- `BPrint` (System.Boolean): True to print this layer when printing the document, false to not

## Return Value

True if the layer was created successfully, false if not

## Remarks

If this layer is not visible, then SOLIDWORKS does not display entities on the layer.
Do not use backslash or @ symbols in Layername.

## Examples

- Create Layer for Selected View (VBA) (Create_Layer_for_Selected_View_Example_VB.htm)
- Create Layer for Selected View (VB.NET) (Create_Layer_for_Selected_View_Example_VBNET.htm)
- Create Layer for Selected View (C#) (Create_Layer_for_Selected_View_Example_CSharp.htm)

## See Also

- `IDrawingDoc.SetCurrentLayer`
- `ILayer`
- `ILayerMgr`