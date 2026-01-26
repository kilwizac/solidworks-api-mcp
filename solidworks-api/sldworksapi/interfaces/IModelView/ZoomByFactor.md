---
type: method
interface: IModelView
member: ZoomByFactor
returns: void
parameters:
  -
    name: Factor
    type: System.Double
    description: Zoom factor
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - zoom
  - factor
  - zoombyfactor
  - imodelview
  - model
  - view
  - double
  - void
  - access
  - assembly
---

# IModelView.ZoomByFactor

Modifies the zoom factor for the model view.

## Signature

```csharp
void ZoomByFactor( 
   System.Double
Factor
)
```
## Parameters

- `Factor` (System.Double): Zoom factor

## Return Value

Unknown.

## Remarks

The zoom factor should be in the range 0.0 < factor < 2.0. For factor greater than 1, the model view is zoomed in, for factor less than 1 the model view is zoomed out.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)