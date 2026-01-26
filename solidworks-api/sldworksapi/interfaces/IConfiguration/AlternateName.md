---
type: property
interface: IConfiguration
member: AlternateName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.Name
keywords:
  - alternatename
  - iconfiguration
  - configuration
  - alternate
  - name
  - string
  - change
  - properties
  - vba
  - traverse
  - hierarchy
  - configurations
  - list
  - vb
  - net
readonly: null
---

# IConfiguration.AlternateName

Gets or sets the configuration's alternate name (i.e., user-specified name).

## Signature

```csharp
System.String AlternateName {get; set;}
```
## Parameters

None.

## Return Value

Alternate or user-specified name for the configuration

## Remarks

To display the configuration's alternate name as the part number in the bill of materials, use
IConfiguration::UseAlternateNameInBOM
.
Configuration names must not contain any special characters reserved by SOLIDWORKS.
If you specify
IConfiguration::BOMPartNoSource
with anything other than
swBOMPartNumberSource_e
.swBOMPartNumber_UserSpecified, then this property is set to an empty string.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)
- Get List of Configurations (C#) (Get_List_Of_Configurations_Example_CSharp.htm)
- Get List of Configurations (VB.NET) (Get_List_Of_Configurations_Example_VBNET.htm)
- Get List of Configurations (VBA) (Get_List_Of_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.Name`