---
type: method
interface: IModelDoc2
member: ShowConfiguration2
returns: System.Boolean
parameters:
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration to display
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IConfigurationManager.AddConfiguration
  - IModelDoc2.AddConfiguration3
  - IModelDoc2.EditConfiguration3
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - activate
  - show
  - configurations
  - showconfiguration2
  - imodeldoc2
  - model
  - doc2
  - configuration2
  - name
  - string
  - boolean
  - custom
  - values
  - cut
  - list
  - folders
  - vba
  - iterate
  - through
  - all
  - rebuild
  - work
  - save
  - data
  - vb
  - net
---

# IModelDoc2.ShowConfiguration2

Shows the named configuration by switching to that configuration and making it the active configuration.

## Signature

```csharp
System.Boolean ShowConfiguration2( 
   System.String
ConfigurationName
)
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration to display

## Return Value

True if the configuration is activated successfully, false if not

## Remarks

Configurations allow you to save certain display characteristics with each of the assembly components. This method allows you to retrieve a previously saved configuration.
If you made changes to the model and the configuration to which you are switching needs to be updated to reflect those changes, then you must rebuild the model using
IModelDoc2::EditRebuild3
. Otherwise, the FeatureManager design tree will show the model as needing to be rebuilt.

## Examples

- Get Custom Property Values on Cut List Folders (VBA) (Get_Custom_Property_Values_On_Cut_List_Folders_Example_VB.htm)
- Iterate Through All Configurations (VBA) (Iterate_Through_All_Configurations_Example_VB.htm)
- Rebuild All Configurations (VBA) (Rebuild_All_Configurations_Example_VB.htm)
- Work With Configurations (VBA) (Work_with_Configurations_Example_VB.htm)
- Save Configuration Data (C#) (Save_Configuration_Data_Example_CSharp.htm)
- Save Configuration Data (VB.NET) (Save_Configuration_Data_Example_VBNET.htm)
- Save Configuration Data (VBA) (Save_Configuration_Data_Example_VB.htm)

## See Also

- `IConfigurationManager.AddConfiguration`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.EditConfiguration3`