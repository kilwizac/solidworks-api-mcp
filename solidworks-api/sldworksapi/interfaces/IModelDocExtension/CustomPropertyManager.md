---
type: property
interface: IModelDocExtension
member: CustomPropertyManager
returns: CustomPropertyManager
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IConfiguration.CustomPropertyManager
  - IFeature.CustomPropertyManager
keywords:
  - custom
  - properties
  - see
  - also
  - icustompropertymanager
  - custompropertymanager
  - imodeldocextension
  - model
  - doc
  - extension
  - manager
  - config
  - name
  - string
  - referenced
  - part
  - vb
  - net
  - vba
readonly: true
---

# IModelDocExtension.CustomPropertyManager

Gets the custom properties for this document or configuration.

## Signature

```csharp
CustomPropertyManager CustomPropertyManager( 
   System.String
ConfigName
) {get;}
```
## Parameters

- `ConfigName` (System.String): Name of configuration

## Return Value

ICustomPropertyManager object

## Remarks

File custom information is stored in the document file. It can be:
General to the file, in which case there is a single value whatever the model's configuration
- or -
Configuration-specific, in which case a different value may be set for each configuration in the model
To access a general custom information value, set the configuration argument to an empty string. To get a document-level property, pass an empty string ("") to the configuration argument.
As per Microsoft recommendations for OLE support, the file summary information for SOLIDWORKS documents is written as an OLE property set into a stream named "\005Summary Information" off the root storage of the SOLIDWORKS document's compound file.
NOTE:
MFC does not currently provide classes that manage summary information. However, the DRAWCLI application shipped with Visual C++ includes a sample implementation, in the form of the class CSummInfo, that you can use as an example when implementing your own. This class is used by the document class CDrawDoc. DRAWCLI also includes property pages for displaying and modifying Summary Information.

## Examples

- Get Custom Properties of Referenced Part (C#) (Get_Custom_Properties_of_Referenced_Part_Example_CSharp.htm)
- Get Custom Properties of Referenced Part (VB.NET) (Get_Custom_Properties_of_Referenced_Part_Example_VBNET.htm)
- Get Custom Properties of Referenced Part (VBA) (Get_Custom_Properties_of_Referenced_Part_Example_VB.htm)

## See Also

- `IConfiguration.CustomPropertyManager`
- `IFeature.CustomPropertyManager`