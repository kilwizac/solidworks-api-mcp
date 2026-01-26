---
type: method
interface: IModelDoc2
member: GetConfigurationCount
returns: System.Int32
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
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IAddConfiguration3
  - IModelDoc2.IGetConfigurationByName
  - IModelDoc2.IGetConfigurationNames
  - IModelDoc2.ShowConfiguration2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - number
  - getconfigurationcount
  - imodeldoc2
  - model
  - doc2
  - count
  - int32
  - names
  - configurations
  - using
  - variant
---

# IModelDoc2.GetConfigurationCount

Gets the number of configurations.

## Signature

```csharp
System.Int32 GetConfigurationCount()
```
## Parameters

None.

## Return Value

Number of configurations

## Examples

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


## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.ConfigurationManager`
- `IModelDoc2.DeleteConfiguration2`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.IGetConfigurationNames`
- `IModelDoc2.ShowConfiguration2`