---
type: method
interface: IView
member: IInsertBomTable
returns: BomTable
parameters:
  -
    name: Template
    type: System.String
    description: File name of the template to use to create this BOM
  -
    name: Xloc
    type: System.Double
    description: X coordinate of the location of the BOM
  -
    name: Yloc
    type: System.Double
    description: Y coordinate of the location of the BOM
  -
    name: Errors
    type: System.Int32
    description: Status of the BOM creation operation as defined in swBOMConfigurationCreationErrors_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetKeepLinkedToBOM
  - IView.GetKeepLinkedToBOMName
  - IView.InsertBomTable
  - IView.SetKeepLinkedToBOM
keywords:
  - bill
  - materials
  - drawing
  - views
  - excel
  - based
  - insert
  - templates
  - see
  - also
  - iview
  - view
  - table
  - bom
  - iinsertbomtable
  - template
  - string
  - xloc
  - double
  - yloc
  - errors
  - int32
---

# IView.IInsertBomTable

Inserts a Bill of Materials (BOM) table for this drawing view using Microsoft Excel.

## Signature

```csharp
BomTable IInsertBomTable( 
   System.String
Template
,
   System.Double
Xloc
,
   System.Double
Yloc
,
   out System.Int32
Errors
)
```
## Parameters

- `Template` (System.String): File name of the template to use to create this BOM
- `Xloc` (System.Double): X coordinate of the location of the BOM
- `Yloc` (System.Double): Y coordinate of the location of the BOM
- `Errors` (System.Int32): Status of the BOM creation operation as defined in swBOMConfigurationCreationErrors_e

## Return Value

BOM table

## Remarks

This method creates a default BOM table at the specified location, using the given template. There are some user preferences that control the default appearance of the table; set them before calling this method to create a BOM that looks like you want it to look. See:
ISldWorks::SetUserPreferenceToggle
values swBOMConfigurationLocked, swBOMConfigurationUseDocumentFont, swBOMConfigurationUseSummaryInfo, swBOMConfigurationAlignBottom, swBOMContentsDisplayAtTop, swBOMControlIdFromAssembly, swBOMControlMissingRows, and swBOMControlSplitTable
ISldWorks::SetUserPreferenceIntegerValue
values swBOMConfigurationAnchorType, swBOMConfigurationWhatToShow, swBOMControlMissingRowDisplay, and swBOMControlSplitDirection
ISldWorks::SetUserPreferenceDoubleValue
value swBOMControlSplitHeight
The Template argument is the full path name of the BOM template to use in creating this BOM. If you specify only a file name with no directory, SOLIDWORKS looks for it in
install_dir
\
lang
\
local language
. If the file name is blank, the template uses the
bomtemp.xls
file in that directory.
The Xloc and Yloc arguments are the (X,Y) drawing location where the BOM is anchored. To get the drawing origin from the drawing view origin, use
IView::GetXform
or
IView::IGetXform
. To get the drawing view extents on the drawing, use
IView::GetOutline
or
IView::IGetOutline
.
If the BOM creation fails, the Dispatch pointer that is returned is null. If you want more information about why the operation failed, use the Errors argument. You can pass in null as the Errors argument if you are not interested in the specific information.
NOTE:
Use
IView::InsertBomTable2
to insert a BOM using SOLIDWORKS table functionality.

## See Also

- `IView.GetKeepLinkedToBOM`
- `IView.GetKeepLinkedToBOMName`
- `IView.InsertBomTable`
- `IView.SetKeepLinkedToBOM`