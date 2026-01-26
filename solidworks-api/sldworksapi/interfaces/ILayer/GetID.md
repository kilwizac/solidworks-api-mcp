---
type: method
interface: ILayer
member: GetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - id
  - layer
  - getid
  - ilayer
  - int32
  - layers
  - vb
  - net
  - vba
---

# ILayer.GetID

Gets the layer ID for this layer.

## Signature

```csharp
System.Int32 GetID()
```
## Parameters

None.

## Return Value

Layer ID for this layer

## Remarks

A layer ID:
is unique within the drawing.
is persistent across SOLIDWORKS Design sessions and never changes, even if you
change the name of the layer
.
can be used to identify a specific layer when multiple layers exist in a drawing.
cannot be assigned by applications or users.
is not the same as a
persistent reference ID
. You can get a layer using its persistent reference ID, but you cannot get a layer using this method.

## Examples

- Get Layers (C#) (Get_Layers_Example_CSharp.htm)
- Get Layers (VB.NET) (Get_Layers_Example_VBNET.htm)
- Get Layers (VBA) (Get_Layers_Example_VB.htm)