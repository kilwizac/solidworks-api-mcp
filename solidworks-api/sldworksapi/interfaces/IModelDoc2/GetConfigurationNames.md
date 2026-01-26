---
type: method
interface: IModelDoc2
member: GetConfigurationNames
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IConfiguration
  - IConfigurationManager
  - IModelDoc2.AddConfiguration3
  - IModelDoc2.ConfigurationManager
  - IModelDoc2.DeleteConfiguration2
  - IModelDoc2.GetConfigurationByName
  - IModelDoc2.GetConfigurationCount
  - IModelDoc2.IAddConfiguration3
  - IModelDoc2.IGetConfigurationByName
  - IModelDoc2.IGetConfigurationNames
  - IModelDoc2.ShowConfiguration2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - names
  - name
  - getconfigurationnames
  - imodeldoc2
  - model
  - doc2
  - object
  - extract
  - specific
  - parameters
  - vba
  - custom
  - properties
  - dimension
  - values
  - all
  - configurations
  - iterate
  - through
  - list
  - rebuild
  - remove
  - material
  - assembly
  - component
  - save
  - data
  - vb
  - net
  - using
  - variant
---

# IModelDoc2.GetConfigurationNames

Gets the names of the configurations in this document.

## Signature

```csharp
System.Object GetConfigurationNames()
```
## Parameters

None.

## Return Value

Array of the names of the configurations in the order they are created in this document

## Examples

- Extract Configuration-specific Parameters (VBA) (Extract_Configuration-Specific_Parameters_Example_VB.htm)
- Get Custom Properties (VBA) (Get_Custom_Properties_Example_VB.htm)
- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)
- Iterate Through All Configurations (VBA) (Iterate_Through_All_Configurations_Example_VB.htm)
- List Custom Properties (VBA) (List_Custom_Properties_Example_VB.htm)
- Rebuild All Configurations (VBA) (Rebuild_All_Configurations_Example_VB.htm)
- Remove Material Properties from Assembly Component (VBA) (Remove_Material_Properties_from_Assembly_Component_Example_VB.htm)
- Save Configuration Data (C#) (Save_Configuration_Data_Example_CSharp.htm)
- Save Configuration Data (VB.NET) (Save_Configuration_Data_Example_VBNET.htm)
- Save Configuration Data (VBA) (Save_Configuration_Data_Example_VB.htm)
### Get Names of Configurations Using Variant (C++)

```cpp
//-------------------------------------------------------
// Preconditions:
// 1. Start up SOLIDWORKS and open a part or assembly document.
// 2. Start Microsoft Visual Studio 2010.
//    a. Click
File > New > Project > Visual C++ > Win32 Console Application
.
//    b. Type the name of your project in
Name
.
//    c. Click
OK
.
//    d. Click
Next
.
//    e. Select
ATL
and click
Finish
.
//    f. Click
Project > Properties > Configuration Properties >
//
C/C++
and type the path to
sldworks.tlb
and
swconst.tlb
, 
//       typically
C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS
, in
//
Additional Include Directories
.
//    g. Click
OK
.
// 3. Replace the code in the code window with
this code
.
// 4. Click
Debug > Start Debugging
.
// 5. Click
Yes
.
//
// Postconditions:
// 1. Pops up a message box for each configuration in the active
//    model, containing the name of that configuration.
// 2. Click
OK
to close each message box.
//--------------------------------------------------------
//This code
#include
"stdafx.h"
#import
"sldworks.tlb"
raw_interfaces_only, raw_native_types, no_namespace, named_guids
// SOLIDWORKS type library
#import
"swconst.tlb"
raw_interfaces_only, raw_native_types, no_namespace, named_guids
// SOLIDWORKS constants type library
int
_tmain(
int
argc, _TCHAR* argv[])
{
// Initialize COM
// Do this before using ATL smart pointers so that
// COM is available
CoInitialize(NULL);
// Use a block so that the smart pointers are destructed when
// the scope of this block is exited
{
// Use ATL smart pointers
CComPtr<ISldWorks>  pSwApp;
if
(pSwApp.CoCreateInstance(
__uuidof
(SldWorks), NULL, CLSCTX_LOCAL_SERVER) != S_OK) {
return
(0);            
		} 
 
		pSwApp->
put_UserControl
(VARIANT_TRUE);
		pSwApp->
put_Visible
(VARIANT_TRUE); 
 
		CComPtr<IModelDoc2>  pSwModel;
		pSwApp->
get_IActiveDoc2
(&pSwModel);
if
(! pSwModel) {
return
(0);
		} 
 
		CComBSTR strModelTitle;
long
nDocumentType;
// swDocumentTypes_e
pSwModel->
GetTitle
(&strModelTitle);
		pSwModel->
GetType
(&nDocumentType); 
 
		VARIANT  vConfigurationNames; 
		::VariantInit(&vConfigurationNames);
// Get the names of the configurations in the active model
                  // NOTE: This is an out-of-process client, so you cannot 
                  // use ModelDoc2::IGetConfigurationNames
pSwModel->
GetConfigurationNames
(&vConfigurationNames); 
		
		CComPtr<IDispatch> pDispatchSafeArray = NULL;
		CComPtr<ISafeArrayUtility> pSwSafeArray = NULL;
		HRESULT hres;
		hres = pSwApp->
GetSafeArrayUtility
(&pDispatchSafeArray);
		hres = pDispatchSafeArray.QueryInterface<ISafeArrayUtility>(&pSwSafeArray);
long
saCount = 0;
long
saType = 0;
long
* visible = 0;
long
nbrConfigs = 0;
		pSwModel->
GetConfigurationCount
(&nbrConfigs);
//Get the name of each configuration
for
(
long
i = 0; i < nbrConfigs; i++) {
			BSTR configurationName;
			pSwSafeArray->
GetBstr
(vConfigurationNames, i, &configurationName);
			CComBSTR msg;
			msg = (OLESTR(
"Name of configuration: "
));
			msg.Append(configurationName);
long
res;
			pSwApp->
SendMsgToUser2
(msg, 0,0, &res);
		}
 
 
	}
// ATL smart pointers are destructed so that all COM objects
// held on to are released
// Shut down COM because you no longer need it
// Stop COM
CoUninitialize();
return
(0);
}
```

- Get List of Configurations (C#) (Get_List_Of_Configurations_Example_CSharp.htm)
- Get List of Configurations (VB.NET) (Get_List_Of_Configurations_Example_VBNET.htm)
- Get List of Configurations (VBA) (Get_List_Of_Configurations_Example_VB.htm)

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.ConfigurationManager`
- `IModelDoc2.DeleteConfiguration2`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationCount`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.IGetConfigurationNames`
- `IModelDoc2.ShowConfiguration2`