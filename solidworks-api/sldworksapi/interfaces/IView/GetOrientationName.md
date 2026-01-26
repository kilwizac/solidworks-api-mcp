---
type: method
interface: IView
member: GetOrientationName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - name
  - orientation
  - views
  - getorientationname
  - iview
  - view
  - string
---

# IView.GetOrientationName

Gets the predefined name of this view.

## Signature

```csharp
System.String GetOrientationName()
```
## Parameters

None.

## Return Value

Predefined name of view or an empty string for unnamed views

## Remarks

This method returns the orientation (predefined) name of the view; e.g., *Front, *Top, *Isometric, or a user-defined view name defined in the model. This method returns an empty string ("") for section views, detail views, projected views, and unfolded views.