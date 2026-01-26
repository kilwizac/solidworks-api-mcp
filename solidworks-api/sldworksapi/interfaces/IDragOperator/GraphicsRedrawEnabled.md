---
type: property
interface: IDragOperator
member: GraphicsRedrawEnabled
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - graphicsredrawenabled
  - idragoperator
  - drag
  - operator
  - graphics
  - redraw
  - enabled
  - boolean
readonly: null
---

# IDragOperator.GraphicsRedrawEnabled

Gets or sets whether or not to update the graphics display after moving components.

## Signature

```csharp
System.Boolean GraphicsRedrawEnabled {get; set;}
```
## Parameters

None.

## Return Value

True to update the graphics display after moving components, false to not

## Remarks

If this property is set to false, call
IModelDoc2::GraphicsRedraw2
when you want to update the graphics display. This property is set to True by default.