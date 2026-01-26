---
type: property
interface: IComponent2
member: UseNamedConfiguration
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - usenamedconfiguration
  - icomponent2
  - component2
  - use
  - named
  - configuration
  - boolean
readonly: true
---

# IComponent2.UseNamedConfiguration

Gets whether a specified configuration or the in-use/last active configuration is used.

## Signature

```csharp
System.Boolean UseNamedConfiguration {get;}
```
## Parameters

None.

## Return Value

True if a configuration is specified and used, false if the in-use/last active configuration is used

## Remarks

Use
IAssemblyDoc::CompConfigProperties4
to set this property.