---
type: property
interface: ILayer
member: Printable
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - printable
  - ilayer
  - layer
  - boolean
readonly: null
---

# ILayer.Printable

Gets and sets whether this layer is printed when the drawing document is printed.

## Signature

```csharp
System.Boolean Printable {get; set;}
```
## Parameters

None.

## Return Value

True if the layer is printable, false if the layer is not visible (see Remarks )

## Remarks

Always call this property after setting
ILayer::Visible
to the opposite state, because setting ILayer::Visible might change the state of ILayer::Printable. It is not possible to make a layer printable if it is not visible.
To ensure that ILayer::Visible and ILayer::Printable are set to the desired states, perform the following steps in this order:
Set ILayer::Visible.
Get the state of ILayer::Printable.
Set ILayer::Printable if necessary.

## Examples

- ILayer (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILayer)