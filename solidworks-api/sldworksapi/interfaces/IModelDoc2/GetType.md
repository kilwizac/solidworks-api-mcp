---
type: method
interface: IModelDoc2
member: GetType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - document
  - types
  - gettype
  - imodeldoc2
  - model
  - doc2
  - type
  - int32
  - display
  - item
  - featuremanager
  - design
  - tree
  - edge
  - data
  - name
  - named
  - entities
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
  - material
  - properties
  - names
  - bodies
  - multibody
  - part
  - select
  - suppress
  - unsuppress
  - feature
  - traverse
  - table
  - anchor
  - hole
  - vb
  - net
  - configurations
  - using
  - variant
---

# IModelDoc2.GetType

Gets the type of the document.

## Signature

```csharp
System.Int32 GetType()
```
## Parameters

None.

## Return Value

Type of this document as defined in swDocumentTypes_e

## Examples

- Display of Item in FeatureManager Design Tree (C++) (Display_of_Item_in_Feature_Manager_Example_CPlusPlus_COM.htm)
- Get Edge Data By Name (C++) (Get_Edge_Data_By_Name_Example_CPlusPlus_COM.htm)
- Get Named Entities (C++) (Get_Named_Entities_Example_CPlusPlus_COM.htm)
- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get Material Properties (VBA) (Get_Material_Properties_Example_VB.htm)
- Get Names of Bodies in Multibody Part (VBA) (Get_Names_of_Bodies_in_MultiBody_Part_Example_VB.htm)
- Select Bodies (VBA) (Select_Bodies_Example_VB.htm)
- Suppress or Unsuppress Feature (VBA) (Feature_Suppression_Example_VB.htm)
- Traverse Bodies (C++) (Traverse_Bodies_Example_CPlusPlusCLI.htm)
- Get and Set Table Anchor of Hole Table (C#) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_CSharp.htm)
- Get and Set Table Anchor of Hole Table (VB.NET) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VBNET.htm)
- Get and Set Table Anchor of Hole Table (VBA) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VB.htm)
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
