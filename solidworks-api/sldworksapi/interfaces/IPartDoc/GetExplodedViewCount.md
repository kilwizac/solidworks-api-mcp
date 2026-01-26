---
type: method
interface: IPartDoc
member: GetExplodedViewCount
returns: System.Int32
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
  - IPartDoc.CreateExplodedView
  - IPartDoc.GetExplodedViewConfigurationName
  - IPartDoc.GetExplodedViewNames
  - IPartDoc.ShowExploded
keywords:
  - getexplodedviewcount
  - ipartdoc
  - part
  - doc
  - exploded
  - view
  - count
  - configuration
  - name
  - string
  - int32
---

# IPartDoc.GetExplodedViewCount

Gets the number of explode views in the specified configuration of this multibody part.

## Signature

```csharp
System.Int32 GetExplodedViewCount( 
   System.String
ConfigurationName
)
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration

## Return Value

Number of explode views in the specified configuration

## See Also

- `IPartDoc.CreateExplodedView`
- `IPartDoc.GetExplodedViewConfigurationName`
- `IPartDoc.GetExplodedViewNames`
- `IPartDoc.ShowExploded`