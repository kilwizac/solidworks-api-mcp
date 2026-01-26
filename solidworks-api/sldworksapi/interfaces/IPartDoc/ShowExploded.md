---
type: method
interface: IPartDoc
member: ShowExploded
returns: System.Boolean
parameters:
  -
    name: ShowIt
    type: System.Boolean
    description: True to show ExplodeViewName in its exploded state, false to show it in its collapsed state
  -
    name: ExplodeViewName
    type: System.String
    description: Name of the explode view to show
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetExplodedViewConfigurationName
  - IPartDoc.GetExplodedViewNames
keywords:
  - showexploded
  - ipartdoc
  - part
  - doc
  - show
  - exploded
  - it
  - boolean
  - explode
  - view
  - name
  - string
  - ipartexplodestep
---

# IPartDoc.ShowExploded

Displays the specified explode view for this multibody part.

## Signature

```csharp
System.Boolean ShowExploded( 
   System.Boolean
ShowIt
,
   System.String
ExplodeViewName
)
```
## Parameters

- `ShowIt` (System.Boolean): True to show ExplodeViewName in its exploded state, false to show it in its collapsed state
- `ExplodeViewName` (System.String): Name of the explode view to show

## Return Value

True if the explode view displays correctly, false if not

## Remarks

This method only works with explode views in the current, active configuration.

## Examples

- IPartExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartExplodeStep)

## See Also

- `IPartDoc.GetExplodedViewConfigurationName`
- `IPartDoc.GetExplodedViewNames`