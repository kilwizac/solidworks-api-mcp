---
type: property
interface: ILayer
member: Visible
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - visible
  - ilayer
  - layer
  - boolean
  - determine
  - vba
  - layers
  - vb
  - net
readonly: null
---

# ILayer.Visible

Gets or sets the visibility of this layer.

## Signature

```csharp
System.Boolean Visible {get; set;}
```
## Parameters

None.

## Return Value

True if the layer is visible, false if the layer is not visible (see Remarks )

## Remarks

After setting this property to the opposite state, call
ILayer::Printable
to check its state, because setting ILayer::Visible might change the state of ILayer::Printable.
To ensure that ILayer::Visible and ILayer::Printable are set to the desired states, perform the following steps in this order:
Set ILayer::Visible.
Get the state of ILayer::Printable.
Set ILayer::Printable if necessary.

## Examples

- Determine if Layer is Visible (VBA) (Determine_if_Layer_is_Visible_Example_VB.htm)
- Get Layers (C#) (Get_Layers_Example_CSharp.htm)
- Get Layers (VB.NET) (Get_Layers_Example_VBNET.htm)
- Get Layers (VBA) (Get_Layers_Example_VB.htm)