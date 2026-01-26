---
type: property
interface: IModelView
member: ObjectSizesAway
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.HasPerspective
keywords:
  - perspective
  - model
  - views
  - objectsizesaway
  - imodelview
  - view
  - object
  - sizes
  - away
  - double
readonly: null
---

# IModelView.ObjectSizesAway

Helps define the perspective of the current model view by relating the size of a displayed object with the distance of the object from the observer.

## Signature

```csharp
System.Double ObjectSizesAway {get; set;}
```
## Parameters

None.

## Return Value

Distance of the object from the observer, relative to the size of the object

## Remarks

This property controls the same value as the view, display, perspective information dialog box. It gives the ratio of the distance of the object from the observer to the size of the object. The smaller the value, the greater the amount of perspective distortion.
You can only modify or get this property when the current model view has the perspective display enabled. See
IModelView::AddPerspective
and
IModelView::RemovePerspective
. If perspective display is disabled, getting the property returns -1, and setting the property has no effect.

## See Also

- `IModelView.HasPerspective`