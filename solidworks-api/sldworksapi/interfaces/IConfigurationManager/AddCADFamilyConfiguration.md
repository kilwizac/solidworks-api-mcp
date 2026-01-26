---
type: method
interface: IConfigurationManager
member: AddCADFamilyConfiguration
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the configuration to add
  -
    name: Description
    type: System.String
    description: Details about the configuration
  -
    name: IsPhysicalProduct
    type: System.Boolean
    description: True to add a parent configuration (Physical Product), false to add a derived configuration (Representation)
  -
    name: RepresentationParentName
    type: System.String
    description: Parent Physical Product name of derived configuration (Representation); valid only if IsPhysicalProduct is false
  -
    name: ConfigOptions
    type: System.Int32
    description: Configuration options as defined by swCADFamilyCfgOptions_e
  -
    name: ChildCompDisplayOption
    type: System.Int32
    description: Child component display option as defined in swChildComponentInBOMOption_e
  -
    name: Rebuild
    type: System.Boolean
    description: True to rebuild the model after adding this configuration, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.Get3DExperienceType
  - IConfiguration.Set3DExperienceType
keywords:
  - 3dexperience
  - solidworks
  - connected
  - addcadfamilyconfiguration
  - iconfigurationmanager
  - configuration
  - manager
  - add
  - cad
  - family
  - name
  - string
  - description
  - physical
  - product
  - boolean
  - representation
  - parent
  - config
  - options
  - int32
  - child
  - comp
  - display
  - option
  - rebuild
  - object
---

# IConfigurationManager.AddCADFamilyConfiguration

Adds the specified configuration to SOLIDWORKS Design Augmented.

## Signature

```csharp
System.Object AddCADFamilyConfiguration( 
   System.String
Name
,
   System.String
Description
,
   System.Boolean
IsPhysicalProduct
,
   System.String
RepresentationParentName
,
   System.Int32
ConfigOptions
,
   System.Int32
ChildCompDisplayOption
,
   System.Boolean
Rebuild
)
```
## Parameters

- `Name` (System.String): Name of the configuration to add
- `Description` (System.String): Details about the configuration
- `IsPhysicalProduct` (System.Boolean): True to add a parent configuration (Physical Product), false to add a derived configuration (Representation)
- `RepresentationParentName` (System.String): Parent Physical Product name of derived configuration (Representation); valid only if IsPhysicalProduct is false
- `ConfigOptions` (System.Int32): Configuration options as defined by swCADFamilyCfgOptions_e
- `ChildCompDisplayOption` (System.Int32): Child component display option as defined in swChildComponentInBOMOption_e
- `Rebuild` (System.Boolean): True to rebuild the model after adding this configuration, false to not

## Return Value

IConfiguration

## See Also

- `IConfiguration.Get3DExperienceType`
- `IConfiguration.Set3DExperienceType`