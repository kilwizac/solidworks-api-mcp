---
type: method
interface: IModelDocExtension
member: AddOrUpdateSearchData
returns: System.Boolean
parameters:
  -
    name: AppName
    type: System.String
    description: Third-party application name
  -
    name: AppKeyword
    type: System.String
    description: Third-party application keyword
  -
    name: AppValue
    type: System.String
    description: Value for AppKeyword
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.DeleteSearchData
  - IModelDocExtension.GetSearchData
  - IModelDocExtension.GetSearchDataCount
  - IModelDocExtension.IGetSearchData
keywords:
  - search
  - solidworks
  - addorupdatesearchdata
  - imodeldocextension
  - model
  - doc
  - extension
  - add
  - update
  - data
  - app
  - name
  - string
  - keyword
  - value
  - boolean
  - third
  - party
  - application
  - keywords
  - vba
---

# IModelDocExtension.AddOrUpdateSearchData

Adds or updates the SOLIDWORKS Search, third-party, application keyword and value to the model document.

## Signature

```csharp
System.Boolean AddOrUpdateSearchData( 
   System.String
AppName
,
   System.String
AppKeyword
,
   System.String
AppValue
)
```
## Parameters

- `AppName` (System.String): Third-party application name
- `AppKeyword` (System.String): Third-party application keyword
- `AppValue` (System.String): Value for AppKeyword

## Return Value

True if the SOLIDWORKS Search, third-party, application keyword and value are added to the model document, false if not

## Remarks

After calling this method and after the keyword has been indexed in SOLIDWORKS Search, type the third-party application name, keyword, or keyword value in the SOLIDWORKS Search box and press
Enter
. Any documents assigned any of these three strings will appear on the
Search
tab in the Task Pane.

## Examples

- Add Third-party Application Keywords to SOLIDWORKS Search and Model (VBA) (Add_Third-party_Application_Keywords_to_SOLIDWORKS_Search_and_Model_Example_VB.htm)

## See Also

- `IModelDocExtension.DeleteSearchData`
- `IModelDocExtension.GetSearchData`
- `IModelDocExtension.GetSearchDataCount`
- `IModelDocExtension.IGetSearchData`