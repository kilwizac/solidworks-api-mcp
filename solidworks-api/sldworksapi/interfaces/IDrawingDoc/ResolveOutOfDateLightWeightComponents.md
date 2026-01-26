---
type: method
interface: IDrawingDoc
member: ResolveOutOfDateLightWeightComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IAssemblyDoc.ResolveOutOfDateLightWeightComponents
  - IComponent2
  - IDrawingDoc.ChangeComponentLayer
  - IDrawingDoc.OnComponentProperties
keywords:
  - resolve
  - lightweight
  - components
  - drawings
  - see
  - also
  - idrawingdoc
  - icomponent2
  - resolveoutofdatelightweightcomponents
  - drawing
  - doc
  - out
  - date
  - light
  - weight
  - boolean
---

# IDrawingDoc.ResolveOutOfDateLightWeightComponents

Resolves out-of-date lightweight components in the selected drawing view or drawing sheet.

## Signature

```csharp
System.Boolean ResolveOutOfDateLightWeightComponents()
```
## Parameters

None.

## Return Value

True if out-of-date lightweight components are resolved, false if not

## Remarks

This method also resolves a selected out-of-date lightweight component and any out-of-date lightweight sub-components, in a drawing document.
You must select a drawing view, drawing sheet, or an out-of-date lightweight component before using this method.
If...
Then...
Drawing view is selected
All out-of-date lightweight components in that drawing view are resolved
Drawing sheet is selected
All-out-of-date lightweight components in that drawing sheet are resolved
Out-of-date lightweight component is selected
It and any out-of-date lightweight sub-components are resolved
Your selection is invalid
This method returns false

## See Also

- `IAssemblyDoc.ResolveOutOfDateLightWeightComponents`
- `IComponent2`
- `IDrawingDoc.ChangeComponentLayer`
- `IDrawingDoc.OnComponentProperties`