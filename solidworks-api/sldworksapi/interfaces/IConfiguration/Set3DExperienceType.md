---
type: method
interface: IConfiguration
member: Set3DExperienceType
returns: System.Boolean
parameters:
  -
    name: IsPhysicalProduct
    type: System.Boolean
    description: True to convert this configuration to a parent configuration (Physical Product/Family), false to convert it to a derived configuration (Representation)
  -
    name: RepresentationParentName
    type: System.String
    description: Parent Physical Product/Family name of derived configuration (Representation); valid only if IsPhysicalProduct is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.Get3DExperienceType
  - IConfigurationManager.AddCADFamilyConfiguration
keywords:
  - solidworks
  - connected
  - 3dexperience
  - set3dexperiencetype
  - iconfiguration
  - configuration
  - set3
  - experience
  - type
  - physical
  - product
  - boolean
  - representation
  - parent
  - name
  - string
---

# IConfiguration.Set3DExperienceType

Converts this configuration in SOLIDWORKS Design Augmented.

## Signature

```csharp
System.Boolean Set3DExperienceType( 
   System.Boolean
IsPhysicalProduct
,
   System.String
RepresentationParentName
)
```
## Parameters

- `IsPhysicalProduct` (System.Boolean): True to convert this configuration to a parent configuration (Physical Product/Family), false to convert it to a derived configuration (Representation)
- `RepresentationParentName` (System.String): Parent Physical Product/Family name of derived configuration (Representation); valid only if IsPhysicalProduct is false

## Return Value

True if configuration successfully converted, false if not

## See Also

- `IConfiguration.Get3DExperienceType`
- `IConfigurationManager.AddCADFamilyConfiguration`