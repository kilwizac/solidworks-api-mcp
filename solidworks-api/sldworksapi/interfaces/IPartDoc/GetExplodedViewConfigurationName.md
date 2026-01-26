---
type: method
interface: IPartDoc
member: GetExplodedViewConfigurationName
returns: System.String
parameters:
  -
    name: ExplodedViewName
    type: System.String
    description: Name of the explode view whose configuration to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetExplodedViewNames
  - IPartDoc.ShowExploded
keywords:
  - getexplodedviewconfigurationname
  - ipartdoc
  - part
  - doc
  - exploded
  - view
  - configuration
  - name
  - string
  - ipartexplodestep
---

# IPartDoc.GetExplodedViewConfigurationName

Gets the name of the configuration for the specified explode view of this multibody part.

## Signature

```csharp
System.String GetExplodedViewConfigurationName( 
   System.String
ExplodedViewName
)
```
## Parameters

- `ExplodedViewName` (System.String): Name of the explode view whose configuration to get

## Return Value

Name of the configuration for ExplodedViewName

## Examples

- IPartExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartExplodeStep)

## See Also

- `IPartDoc.GetExplodedViewNames`
- `IPartDoc.ShowExploded`