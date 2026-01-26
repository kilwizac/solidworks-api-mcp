---
type: property
interface: IDrawingComponent
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
  - idrawingcomponent
  - drawing
  - component
  - boolean
  - components
  - properties
  - view
  - vba
  - hide
readonly: null
---

# IDrawingComponent.Visible

Gets or sets the visibility state for this component for this drawing view.

## Signature

```csharp
System.Boolean Visible {get; set;}
```
## Parameters

None.

## Return Value

True if the component is visible, false if hidden

## Remarks

Call the
IModelDoc2::Rebuild
after setting this method.

## Examples

- Get Components' Properties in Drawing View (VBA) (Get_Components_Properties_in_Drawing_View_Example_VB.htm)
- Hide Drawing Components (VBA) (Hide_Drawing_Components_Example_VB.htm)