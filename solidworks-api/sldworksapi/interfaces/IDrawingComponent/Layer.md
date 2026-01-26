---
type: property
interface: IDrawingComponent
member: Layer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - layer
  - idrawingcomponent
  - drawing
  - component
  - string
readonly: null
---

# IDrawingComponent.Layer

Gets or sets the name of the layer on which the component resides in the view.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Name of the layer on which this component resides

## Remarks

If you specify...
Then...
Empty string
Name of the component's layer is set to None or to the name of the default layer.
Name of an existing layer
Component is placed on that layer.
Name of a non-existent layer
Layer does not change.
If the drawing component is an assembly:
you can set the layer, and the layers of child drawing components will also be set.
the query returns an empty string because the layer is uniquely defined in case child
drawing components reside on different layers.