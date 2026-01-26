---
type: method
interface: IPartDoc
member: GetExplodedViewNames
returns: System.Object
parameters:
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetExplodedViewConfigurationName
  - IPartDoc.ShowExploded
keywords:
  - getexplodedviewnames
  - ipartdoc
  - part
  - doc
  - exploded
  - view
  - names
  - configuration
  - name
  - string
  - object
  - ipartexplodestep
---

# IPartDoc.GetExplodedViewNames

Gets the names of all the explode views in the specified configuration of this multibody part.

## Signature

```csharp
System.Object GetExplodedViewNames( 
   System.String
ConfigurationName
)
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration

## Return Value

Array of strings of the names of the explode views for ConfigurationName

## Examples

- IPartExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartExplodeStep)

## See Also

- `IPartDoc.GetExplodedViewConfigurationName`
- `IPartDoc.ShowExploded`