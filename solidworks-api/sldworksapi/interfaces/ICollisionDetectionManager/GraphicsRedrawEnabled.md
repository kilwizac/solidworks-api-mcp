---
type: property
interface: ICollisionDetectionManager
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
  - icollisiondetectionmanager
  - collision
  - detection
  - manager
  - graphics
  - redraw
  - enabled
  - boolean
readonly: null
---

# ICollisionDetectionManager.GraphicsRedrawEnabled

Gets or sets whether to display components in their transformed positions.

## Signature

```csharp
System.Boolean GraphicsRedrawEnabled {get; set;}
```
## Parameters

None.

## Return Value

True to display components in their transformed positions, false to display components in their last known positions

## Remarks

If this property is set to false, the graphics display update is drastically reduced. The client application may force the assembly to be redrawn by calling
IModelDoc2::GraphicsRedraw2
.
Set this property to false for maximum performance.