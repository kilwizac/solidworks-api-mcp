---
type: method
interface: ILayerMgr
member: AddLayer
returns: System.Int32
parameters:
  -
    name: NameIn
    type: System.String
    description: Layer name
  -
    name: DescIn
    type: System.String
    description: Description for the new layer
  -
    name: ColorIn
    type: System.Int32
    description: COLORREF value specifying the desired color of items within this layer
  -
    name: StyleIn
    type: System.Int32
    description: Line style as defined in swLineStyles_e
  -
    name: WidthIn
    type: System.Int32
    description: Line width as defined in swLineWeights_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - addlayer
  - ilayermgr
  - layer
  - mgr
  - add
  - name
  - string
  - desc
  - color
  - int32
  - style
  - width
---

# ILayerMgr.AddLayer

Adds a layer to this drawing document.

## Signature

```csharp
System.Int32 AddLayer( 
   System.String
NameIn
,
   System.String
DescIn
,
   System.Int32
ColorIn
,
   System.Int32
StyleIn
,
   System.Int32
WidthIn
)
```
## Parameters

- `NameIn` (System.String): Layer name
- `DescIn` (System.String): Description for the new layer
- `ColorIn` (System.Int32): COLORREF value specifying the desired color of items within this layer
- `StyleIn` (System.Int32): Line style as defined in swLineStyles_e
- `WidthIn` (System.Int32): Line width as defined in swLineWeights_e

## Return Value

1 if the layer was created successfully