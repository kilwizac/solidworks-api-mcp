---
type: property
interface: IComponent2
member: CustomPropertyManager
returns: System.Object
parameters:
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration for which to get custom properties; empty string to obtain document-specific custom properties
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - custompropertymanager
  - icomponent2
  - component2
  - custom
  - manager
  - configuration
  - name
  - string
  - object
readonly: true
---

# IComponent2.CustomPropertyManager

Gets the configuration-specific custom property manager for this assembly component.

## Signature

```csharp
System.Object CustomPropertyManager( 
   System.String
ConfigurationName
) {get;}
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration for which to get custom properties; empty string to obtain document-specific custom properties

## Return Value

ICustomPropertyManager