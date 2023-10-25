<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<h1>전자결재</h1>
<h2>내결재함</h2>

<div>
	<a type="button" class="btn btn-success" href="/payment/insert">결재문서작성</a>
</div>

<div>
	<button type="button" class="btn btn-secondary">전체결재문서</button>
	<button type="button" class="btn btn-secondary">승인대기문서</button>
	<button type="button" class="btn btn-secondary">결재수신문서</button>
	<button type="button" class="btn btn-secondary">참조문서</button>
	<button type="button" class="btn btn-secondary">기안문서</button>
	<button type="button" class="btn btn-secondary">임시저장</button>
</div>

<div>
	<div class="card-box mb-30">
					<div class="pd-20">
						<h4 class="text-blue h4">결재문서</h4>
					</div>
					<div class="pb-20">
						<div id="DataTables_Table_2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
							<table class="table hover multiple-select-row data-table-export nowrap dataTable no-footer dtr-inline" id="DataTables_Table_2" role="grid">
							
							<!-- 몇개보기 -->
<!-- 							
							<div class="row">
								<div class="col-sm-12 col-md-6">
									<div class="dataTables_length" id="DataTables_Table_3_length">
										<label>Show 
											<select name="DataTables_Table_3_length" aria-controls="DataTables_Table_3" class="custom-select custom-select-sm form-control form-control-sm">
												<option value="10">10</option>
												<option value="25">25</option>
												<option value="50">50</option>
												<option value="-1">All</option>
											</select> entries
										</label>
									</div>
								</div>
							</div>
-->
							<thead>
								<tr role="row">
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >순번</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >결재분류</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >결재제목</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >기안자</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >기안날짜</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >결재차수</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >현재결재자</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >결재상태</th>
									<th class="sorting" tabindex="0" aria-controls="DataTables_Table_2" rowspan="1" colspan="1" >문서상태</th>
								</tr>
							</thead>
							<tbody>
								<tr role="row" class="odd">
									<td class="table-plus sorting_1" tabindex="0">1</td>
									<td>휴가신청</td>
									<td>2301001 박병웅 휴가신청</td>
									<td>박병웅</td>
									<td>2023-10-24</td>
									<td>1</td>
									<td>전원영</td>
									<td>미결</td>
									<td>검토중</td>
								</tr>
								<tr role="row" class="odd">
									<td class="table-plus sorting_1" tabindex="0">2</td>
									<td>지출결의서</td>
									<td>2302001 홍길동 지출결의서</td>
									<td>홍길동</td>
									<td>2023-10-25</td>
									<td>3</td>
									<td>손오공</td>
									<td>종결</td>
									<td>결재완료</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
</div>