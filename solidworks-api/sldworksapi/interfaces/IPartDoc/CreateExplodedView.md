---
type: method
interface: IPartDoc
member: CreateExplodedView
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IConfiguration.AddPartExplodeStep
  - IConfiguration.GetPartExplodeStep
  - IPartDoc.GetExplodedViewConfigurationName
  - IPartDoc.GetExplodedViewCount
  - IPartDoc.GetExplodedViewNames
  - IPartDoc.ShowExploded
  - IPartExplodeStep
keywords:
  - exploded
  - views
  - multibody
  - parts
  - createexplodedview
  - ipartdoc
  - part
  - doc
  - create
  - view
  - boolean
  - ipartexplodestep
---

# IPartDoc.CreateExplodedView

Creates an explode view of this multibody part.

## Signature

```csharp
System.Boolean CreateExplodedView()
```
## Parameters

None.

## Return Value

True if the explode view is successfully created, false if not

## Examples

- IPartExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartExplodeStep)

## See Also

- `IConfiguration.AddPartExplodeStep`
- `IConfiguration.GetPartExplodeStep`
- `IPartDoc.GetExplodedViewConfigurationName`
- `IPartDoc.GetExplodedViewCount`
- `IPartDoc.GetExplodedViewNames`
- `IPartDoc.ShowExploded`
- `IPartExplodeStep`